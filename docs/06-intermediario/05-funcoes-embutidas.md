# 17. Funções Embutidas do PostgreSQL

O PostgreSQL possui dezenas de funções prontas que facilitam muito o trabalho.

## Funções de String

```sql
SELECT 
    UPPER('olá mundo'),          -- OLÁ MUNDO
    LOWER('OLÁ MUNDO'),          -- olá mundo
    INITCAP('olá mundo'),        -- Olá Mundo
    LENGTH('PostgreSQL'),        -- 10
    TRIM('  texto  '),           -- texto
    REPLACE('banana', 'a', 'o'), -- bonono
    SUBSTRING('PostgreSQL', 1, 4), -- Post
    nome || ' - ' || email AS nome_email
FROM clientes;
```

## Funções de Data e Hora

```sql
SELECT 
    CURRENT_DATE,                -- data atual
    CURRENT_TIMESTAMP,           -- data e hora atual
    NOW(),                       -- mesma coisa
    AGE('2024-01-01', '1990-05-15'), -- intervalo
    DATE_PART('year', data_nascimento) AS ano,
    TO_CHAR(criado_em, 'DD/MM/YYYY HH24:MI') AS formatado
FROM clientes;
```

## Funções numéricas

```sql
SELECT 
    ROUND(123.456, 2),    -- 123.46
    CEIL(123.1),          -- 124
    FLOOR(123.9),         -- 123
    ABS(-15),             -- 15
    POWER(2, 10),         -- 1024
    RANDOM();             -- número aleatório entre 0 e 1
```

## Funções condicionais

```sql
-- COALESCE: retorna o primeiro valor não nulo
SELECT COALESCE(telefone, celular, 'Sem telefone') FROM clientes;

-- NULLIF: retorna NULL se os dois valores forem iguais
SELECT NULLIF(valor, 0) FROM pedidos;

-- CASE: estrutura condicional
SELECT 
    nome,
    CASE 
        WHEN data_nascimento > '2000-01-01' THEN 'Jovem'
        WHEN data_nascimento > '1980-01-01' THEN 'Adulto'
        ELSE 'Sênior'
    END AS faixa_etaria
FROM clientes;
```

## Função CAST (conversão de tipos)

```sql
SELECT 
    CAST('123' AS INTEGER),
    '123'::INTEGER,              -- sintaxe mais curta
    valor::TEXT
FROM pedidos;
```
