# 12. Joins

Joins são usados para **combinar dados de duas ou mais tabelas** com base em um relacionamento entre elas.

Vamos considerar as seguintes tabelas de exemplo:

```sql
CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    cliente_id INTEGER REFERENCES clientes(id),
    valor NUMERIC(10,2),
    data_pedido DATE DEFAULT CURRENT_DATE
);
```

## INNER JOIN

Retorna apenas os registros que possuem correspondência nas duas tabelas.

```sql
SELECT 
    c.nome,
    p.id AS pedido_id,
    p.valor,
    p.data_pedido
FROM clientes c
INNER JOIN pedidos p ON p.cliente_id = c.id;
```

## LEFT JOIN

Retorna **todos** os registros da tabela da esquerda e os correspondentes da direita. Quando não há correspondência, os campos da direita ficam `NULL`.

```sql
SELECT 
    c.nome,
    p.id AS pedido_id,
    p.valor
FROM clientes c
LEFT JOIN pedidos p ON p.cliente_id = c.id;
```

Útil para encontrar clientes que ainda não fizeram pedidos:

```sql
SELECT c.nome
FROM clientes c
LEFT JOIN pedidos p ON p.cliente_id = c.id
WHERE p.id IS NULL;
```

## RIGHT JOIN

É o oposto do LEFT JOIN. Retorna todos os registros da tabela da direita.

```sql
SELECT 
    c.nome,
    p.id AS pedido_id,
    p.valor
FROM clientes c
RIGHT JOIN pedidos p ON p.cliente_id = c.id;
```

Na prática o `RIGHT JOIN` é pouco usado, pois a maioria das pessoas prefere inverter as tabelas e usar `LEFT JOIN`.

## FULL OUTER JOIN

Retorna todos os registros das duas tabelas. Quando não há correspondência, preenche com `NULL`.

```sql
SELECT 
    c.nome,
    p.id AS pedido_id,
    p.valor
FROM clientes c
FULL OUTER JOIN pedidos p ON p.cliente_id = c.id;
```

## CROSS JOIN

Faz o produto cartesiano (todas as combinações possíveis). Use com cuidado.

```sql
SELECT c.nome, p.nome AS produto
FROM clientes c
CROSS JOIN produtos p;
```

## Self JOIN

Quando você faz join de uma tabela com ela mesma.

```sql
-- Exemplo: funcionários e seus gerentes
SELECT 
    f.nome AS funcionario,
    g.nome AS gerente
FROM funcionarios f
LEFT JOIN funcionarios g ON f.gerente_id = g.id;
```

## Boas práticas

- Sempre use **aliases** de tabela (`c`, `p`, etc.) para deixar o código mais legível
- Prefira `LEFT JOIN` em vez de `RIGHT JOIN`
- Em joins com várias tabelas, organize as condições no `ON` de forma clara
- Use o Diagrama ER do DBeaver para visualizar os relacionamentos antes de escrever a query

Com os Joins você consegue montar consultas poderosas combinando dados de múltiplas tabelas. No próximo nível vamos aprender agregações e subqueries.
