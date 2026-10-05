# 16. Índices Básicos

Índices melhoram drasticamente a performance de consultas, especialmente em tabelas grandes.

## O que é um índice?

É uma estrutura de dados que permite ao PostgreSQL encontrar linhas de forma muito mais rápida (parecido com o índice de um livro).

## Criando um índice

```sql
-- Índice simples
CREATE INDEX idx_clientes_email ON clientes(email);

-- Índice composto (mais de uma coluna)
CREATE INDEX idx_pedidos_cliente_data ON pedidos(cliente_id, data_pedido);

-- Índice único
CREATE UNIQUE INDEX idx_clientes_email_unique ON clientes(email);
```

## Quando criar índices?

**Crie índices em:**
- Colunas usadas frequentemente no `WHERE`
- Colunas usadas em `JOIN`
- Colunas usadas em `ORDER BY` de consultas pesadas
- Foreign Keys (boa prática)

**Evite índices em:**
- Tabelas muito pequenas
- Colunas que sofrem muitas escritas e poucas leituras
- Colunas com baixa seletividade (ex: boolean `ativo`)

## Tipos de índices mais comuns

| Tipo     | Uso principal                          |
|----------|----------------------------------------|
| B-tree   | Padrão. Serve para a maioria dos casos |
| Hash     | Apenas comparações de igualdade        |
| GIN      | Arrays, JSONB, full-text search        |
| GiST     | Dados geométricos, full-text           |

## Verificando índices no DBeaver

1. Expanda a tabela no Database Navigator
2. Abra a pasta **Indexes**
3. Ou use a query:

```sql
SELECT indexname, indexdef
FROM pg_indexes
WHERE tablename = 'pedidos';
```

## Custo dos índices

Índices aceleram leituras, mas **deixam escritas mais lentas** (INSERT/UPDATE/DELETE precisam atualizar o índice). Por isso não se deve criar índices demais.
