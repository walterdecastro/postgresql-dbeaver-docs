# 19. CTEs (Common Table Expressions)

CTEs permitem criar **consultas temporárias nomeadas**, deixando o SQL muito mais legível e organizado.

## CTE simples

```sql
WITH pedidos_2024 AS (
    SELECT *
    FROM pedidos
    WHERE data_pedido >= '2024-01-01'
)
SELECT 
    c.nome,
    COUNT(p.id) AS total_pedidos
FROM clientes c
JOIN pedidos_2024 p ON p.cliente_id = c.id
GROUP BY c.nome;
```

## Múltiplas CTEs

```sql
WITH 
pedidos_validos AS (
    SELECT * FROM pedidos WHERE valor > 0
),
totais_cliente AS (
    SELECT 
        cliente_id,
        COUNT(*) AS total,
        SUM(valor) AS valor_total
    FROM pedidos_validos
    GROUP BY cliente_id
)
SELECT 
    c.nome,
    t.total,
    t.valor_total
FROM clientes c
JOIN totais_cliente t ON t.cliente_id = c.id
ORDER BY t.valor_total DESC;
```

## CTE Recursiva

Útil para hierarquias (organogramas, categorias, menus, etc.).

```sql
-- Exemplo: hierarquia de funcionários
WITH RECURSIVE hierarquia AS (
    -- Caso base: funcionários sem gerente (topos da hierarquia)
    SELECT id, nome, gerente_id, 1 AS nivel
    FROM funcionarios
    WHERE gerente_id IS NULL

    UNION ALL

    -- Caso recursivo
    SELECT f.id, f.nome, f.gerente_id, h.nivel + 1
    FROM funcionarios f
    JOIN hierarquia h ON f.gerente_id = h.id
)
SELECT * FROM hierarquia
ORDER BY nivel, nome;
```

## Vantagens das CTEs

- Deixam queries complexas muito mais legíveis
- Podem ser referenciadas várias vezes na mesma query
- Facilitam o debug (você pode testar cada CTE isoladamente)
- Substituem muitas subqueries aninhadas
