# 15. Views

Views são **consultas salvas** que se comportam como tabelas virtuais. Elas não armazenam dados (exceto as Materialized Views).

## Criando uma View

```sql
CREATE VIEW vw_clientes_com_pedidos AS
SELECT 
    c.id,
    c.nome,
    c.email,
    COUNT(p.id) AS total_pedidos,
    COALESCE(SUM(p.valor), 0) AS valor_total
FROM clientes c
LEFT JOIN pedidos p ON p.cliente_id = c.id
GROUP BY c.id, c.nome, c.email;
```

Agora você pode consultar a view como se fosse uma tabela:

```sql
SELECT * FROM vw_clientes_com_pedidos
WHERE total_pedidos > 0
ORDER BY valor_total DESC;
```

## Vantagens das Views

- Simplificam consultas complexas
- Facilitam a reutilização de lógica
- Podem restringir o acesso a determinadas colunas (segurança)
- Deixam o código mais limpo

## Atualizando e removendo Views

```sql
-- Recria a view (ou use CREATE OR REPLACE)
CREATE OR REPLACE VIEW vw_clientes_com_pedidos AS
SELECT ...;

-- Remove a view
DROP VIEW vw_clientes_com_pedidos;
```

## Materialized Views (introdução)

Diferente das views normais, as **Materialized Views** armazenam o resultado da consulta fisicamente.

```sql
CREATE MATERIALIZED VIEW mv_vendas_mensais AS
SELECT 
    DATE_TRUNC('month', data_pedido) AS mes,
    SUM(valor) AS total
FROM pedidos
GROUP BY DATE_TRUNC('month', data_pedido);

-- Atualiza os dados da materialized view
REFRESH MATERIALIZED VIEW mv_vendas_mensais;
```

Úteis para relatórios pesados que não precisam de dados em tempo real.
