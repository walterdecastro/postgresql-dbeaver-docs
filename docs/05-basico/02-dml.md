# 10. DML — Data Manipulation Language

DML (Data Manipulation Language) é responsável por **inserir, atualizar, excluir e consultar** dados.

Os principais comandos são:

- `INSERT`
- `UPDATE`
- `DELETE`
- `SELECT`

## INSERT — Inserindo dados

```sql
-- Inserindo uma linha
INSERT INTO clientes (nome, email, data_nascimento)
VALUES ('Ana Silva', 'ana@email.com', '1990-05-15');

-- Inserindo várias linhas de uma vez
INSERT INTO clientes (nome, email, data_nascimento) VALUES
('Bruno Costa', 'bruno@email.com', '1985-11-20'),
('Carla Mendes', 'carla@email.com', '1992-03-08'),
('Diego Rocha', 'diego@email.com', '1988-07-30');
```

## SELECT — Consultando dados

```sql
-- Todas as colunas
SELECT * FROM clientes;

-- Colunas específicas
SELECT nome, email FROM clientes;

-- Com filtro
SELECT * FROM clientes WHERE ativo = true;

-- Ordenação
SELECT * FROM clientes ORDER BY nome ASC;

-- Limitando resultados
SELECT * FROM clientes ORDER BY criado_em DESC LIMIT 10;
```

### Operadores de comparação úteis

| Operador     | Descrição                    |
|--------------|------------------------------|
| `=`          | Igual                        |
| `<>` ou `!=` | Diferente                    |
| `>` `<` `>=` `<=` | Comparações numéricas   |
| `LIKE`       | Busca com curingas           |
| `IN`         | Lista de valores             |
| `BETWEEN`    | Intervalo                    |
| `IS NULL`    | Valor nulo                   |

```sql
-- Exemplos
SELECT * FROM clientes WHERE nome LIKE 'A%';
SELECT * FROM clientes WHERE id IN (1, 3, 5);
SELECT * FROM clientes WHERE data_nascimento BETWEEN '1985-01-01' AND '1990-12-31';
```

## UPDATE — Atualizando dados

```sql
-- Atualiza um registro específico
UPDATE clientes
SET email = 'ana.silva@email.com'
WHERE id = 1;

-- Atualiza vários registros
UPDATE clientes
SET ativo = false
WHERE data_nascimento < '1990-01-01';
```

> **Importante:** Sempre use a cláusula `WHERE` no `UPDATE`. Sem ela, **todos** os registros da tabela serão atualizados.

## DELETE — Excluindo dados

```sql
-- Exclui um registro específico
DELETE FROM clientes WHERE id = 4;

-- Exclui com condição
DELETE FROM clientes WHERE ativo = false;
```

> Mesma regra do UPDATE: **sempre** use `WHERE` para não apagar a tabela inteira sem querer.

## Boas práticas no DBeaver

- Antes de executar um `UPDATE` ou `DELETE`, faça um `SELECT` com a mesma condição do `WHERE` para verificar quantos registros serão afetados.
- Use transações quando for fazer alterações importantes (veremos isso no capítulo de Transações).
