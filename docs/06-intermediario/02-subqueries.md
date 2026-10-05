# 14. Subqueries

Subqueries (ou subconsultas) são queries dentro de outras queries. Elas são muito poderosas e flexíveis.

## Subquery escalar (retorna um único valor)

```sql
-- Clientes que fizeram o pedido de maior valor
SELECT nome
FROM clientes
WHERE id = (
    SELECT cliente_id
    FROM pedidos
    ORDER BY valor DESC
    LIMIT 1
);
```

## Subquery com IN

```sql
-- Clientes que já fizeram pelo menos um pedido
SELECT nome
FROM clientes
WHERE id IN (
    SELECT DISTINCT cliente_id FROM pedidos
);
```

## EXISTS

Verifica se a subquery retorna algum registro (mais eficiente que `IN` em muitos casos).

```sql
-- Clientes que possuem pedidos
SELECT c.nome
FROM clientes c
WHERE EXISTS (
    SELECT 1 FROM pedidos p WHERE p.cliente_id = c.id
);
```

## Subquery correlacionada

A subquery interna referencia a query externa.

```sql
-- Pedidos cujo valor é maior que a média de pedidos do mesmo cliente
SELECT p.*
FROM pedidos p
WHERE p.valor > (
    SELECT AVG(p2.valor)
    FROM pedidos p2
    WHERE p2.cliente_id = p.cliente_id
);
```

## Subquery no FROM (tabela derivada)

```sql
SELECT 
    media_por_cliente.cliente_id,
    media_por_cliente.media
FROM (
    SELECT cliente_id, AVG(valor) AS media
    FROM pedidos
    GROUP BY cliente_id
) AS media_por_cliente
WHERE media_por_cliente.media > 500;
```

## Dica

Em muitos casos CTEs (que veremos no nível avançado) deixam as queries mais legíveis do que subqueries aninhadas.
