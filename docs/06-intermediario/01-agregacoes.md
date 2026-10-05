# 13. Funções de Agregação e GROUP BY

Funções de agregação permitem **resumir** dados: contar, somar, calcular médias, etc.

## Principais funções

| Função   | Descrição                          |
|----------|------------------------------------|
| `COUNT`  | Conta registros                    |
| `SUM`    | Soma valores                       |
| `AVG`    | Calcula a média                    |
| `MIN`    | Menor valor                        |
| `MAX`    | Maior valor                        |

```sql
SELECT 
    COUNT(*) AS total_pedidos,
    SUM(valor) AS valor_total,
    AVG(valor) AS ticket_medio,
    MIN(valor) AS menor_pedido,
    MAX(valor) AS maior_pedido
FROM pedidos;
```

## GROUP BY

Usado para agrupar registros e aplicar agregações por grupo.

```sql
-- Total de pedidos e valor por cliente
SELECT 
    c.nome,
    COUNT(p.id) AS total_pedidos,
    SUM(p.valor) AS valor_total
FROM clientes c
LEFT JOIN pedidos p ON p.cliente_id = c.id
GROUP BY c.id, c.nome
ORDER BY valor_total DESC;
```

## HAVING

O `HAVING` filtra **depois** da agregação (enquanto o `WHERE` filtra antes).

```sql
-- Clientes que fizeram mais de 3 pedidos
SELECT 
    c.nome,
    COUNT(p.id) AS total_pedidos
FROM clientes c
JOIN pedidos p ON p.cliente_id = c.id
GROUP BY c.id, c.nome
HAVING COUNT(p.id) > 3;
```

## Diferença entre WHERE e HAVING

| Cláusula | Quando é aplicada      | Pode usar agregação? |
|----------|------------------------|----------------------|
| WHERE    | Antes do GROUP BY      | Não                  |
| HAVING   | Depois do GROUP BY     | Sim                  |

```sql
-- Exemplo combinando os dois
SELECT 
    c.nome,
    COUNT(p.id) AS total_pedidos,
    SUM(p.valor) AS valor_total
FROM clientes c
JOIN pedidos p ON p.cliente_id = c.id
WHERE p.data_pedido >= '2024-01-01'   -- filtra os pedidos
GROUP BY c.id, c.nome
HAVING SUM(p.valor) > 1000;           -- filtra os grupos
```
