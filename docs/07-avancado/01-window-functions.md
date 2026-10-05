# 18. Window Functions

Window Functions são uma das funcionalidades mais poderosas do PostgreSQL. Elas permitem realizar cálculos em um conjunto de linhas relacionadas à linha atual, **sem agrupar** o resultado.

## Sintaxe básica

```sql
função() OVER (
    PARTITION BY coluna
    ORDER BY coluna
    ROWS BETWEEN ... AND ...
)
```

## Ranking

```sql
SELECT 
    nome,
    valor,
    ROW_NUMBER() OVER (ORDER BY valor DESC) AS ordem,
    RANK() OVER (ORDER BY valor DESC) AS ranking,
    DENSE_RANK() OVER (ORDER BY valor DESC) AS ranking_denso
FROM pedidos;
```

- `ROW_NUMBER()`: número sequencial único
- `RANK()`: ranking com buracos (1, 2, 2, 4...)
- `DENSE_RANK()`: ranking sem buracos (1, 2, 2, 3...)

## PARTITION BY

Divide os dados em grupos (partições) e aplica a função dentro de cada grupo.

```sql
-- Ranking de pedidos dentro de cada cliente
SELECT 
    c.nome,
    p.valor,
    RANK() OVER (
        PARTITION BY c.id 
        ORDER BY p.valor DESC
    ) AS ranking_no_cliente
FROM clientes c
JOIN pedidos p ON p.cliente_id = c.id;
```

## Funções de valor (LAG / LEAD)

```sql
SELECT 
    data_pedido,
    valor,
    LAG(valor) OVER (ORDER BY data_pedido) AS valor_anterior,
    LEAD(valor) OVER (ORDER BY data_pedido) AS proximo_valor,
    valor - LAG(valor) OVER (ORDER BY data_pedido) AS diferenca
FROM pedidos;
```

## Funções de agregação em janela

```sql
SELECT 
    data_pedido,
    valor,
    SUM(valor) OVER (ORDER BY data_pedido) AS total_acumulado,
    AVG(valor) OVER (
        ORDER BY data_pedido 
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ) AS media_movel_3
FROM pedidos;
```

Window Functions são extremamente úteis para relatórios, rankings, médias móveis e análises que antes exigiam subqueries complexas.
