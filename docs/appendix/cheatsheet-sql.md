# Cheatsheet SQL PostgreSQL

## DDL

```sql
CREATE TABLE tabela (...);
ALTER TABLE tabela ADD COLUMN ...;
ALTER TABLE tabela DROP COLUMN ...;
DROP TABLE tabela;
TRUNCATE TABLE tabela;
```

## DML

```sql
INSERT INTO tabela (col1, col2) VALUES (v1, v2);
UPDATE tabela SET col1 = v1 WHERE ...;
DELETE FROM tabela WHERE ...;
SELECT col1, col2 FROM tabela WHERE ... ORDER BY ... LIMIT ...;
```

## Joins

```sql
INNER JOIN  → apenas correspondências
LEFT JOIN   → todos da esquerda + correspondências
FULL JOIN   → todos dos dois lados
CROSS JOIN  → produto cartesiano
```

## Agregações

```sql
COUNT(*)  SUM(col)  AVG(col)  MIN(col)  MAX(col)
GROUP BY coluna
HAVING condição
```

## Window Functions

```sql
ROW_NUMBER() OVER (ORDER BY ...)
RANK() OVER (PARTITION BY ... ORDER BY ...)
LAG(col) / LEAD(col) OVER (ORDER BY ...)
SUM(col) OVER (ORDER BY ... ROWS UNBOUNDED PRECEDING)
```

## CTEs

```sql
WITH nome AS (
    SELECT ...
)
SELECT * FROM nome;
```

## Funções úteis

```sql
COALESCE(a, b, c)
NULLIF(a, b)
CASE WHEN ... THEN ... ELSE ... END
COALESCE / NULLIF / CAST
UPPER / LOWER / TRIM / SUBSTRING
CURRENT_DATE / NOW() / AGE()
```
