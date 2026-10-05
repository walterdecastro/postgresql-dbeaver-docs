# 9. DDL — Data Definition Language

DDL (Data Definition Language) é o conjunto de comandos usados para **definir e alterar a estrutura** do banco de dados.

Os principais comandos DDL são:

- `CREATE`
- `ALTER`
- `DROP`
- `TRUNCATE`

## Criando um banco de dados

```sql
CREATE DATABASE loja;
```

No DBeaver você também pode criar pelo botão direito em **Databases → Create New Database**.

## Schemas

Todo banco PostgreSQL possui o schema `public` por padrão. Você pode criar outros:

```sql
CREATE SCHEMA vendas;
```

## Criando tabelas

```sql
CREATE TABLE clientes (
    id              SERIAL PRIMARY KEY,
    nome            VARCHAR(100) NOT NULL,
    email           VARCHAR(150) UNIQUE,
    data_nascimento DATE,
    ativo           BOOLEAN DEFAULT true,
    criado_em       TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Tipos de dados mais comuns

| Tipo              | Descrição                          | Exemplo                  |
|-------------------|------------------------------------|--------------------------|
| `SERIAL`          | Inteiro auto-incremento            | 1, 2, 3...               |
| `INTEGER`         | Número inteiro                     | 42                       |
| `NUMERIC(10,2)`   | Número decimal                     | 199.90                   |
| `VARCHAR(n)`      | Texto com limite                   | 'João'                   |
| `TEXT`            | Texto sem limite                   | textos longos            |
| `BOOLEAN`         | Verdadeiro/Falso                   | true / false             |
| `DATE`            | Data                               | '2024-05-20'             |
| `TIMESTAMP`       | Data e hora                        | '2024-05-20 14:30:00'    |
| `UUID`            | Identificador único                | gerado automaticamente   |

## ALTER TABLE

Usado para modificar uma tabela existente:

```sql
-- Adicionar coluna
ALTER TABLE clientes ADD COLUMN telefone VARCHAR(20);

-- Renomear coluna
ALTER TABLE clientes RENAME COLUMN telefone TO celular;

-- Alterar tipo de coluna
ALTER TABLE clientes ALTER COLUMN nome TYPE VARCHAR(150);

-- Remover coluna
ALTER TABLE clientes DROP COLUMN celular;
```

## DROP e TRUNCATE

```sql
-- Remove a tabela inteira (estrutura + dados)
DROP TABLE clientes;

-- Remove apenas os dados, mantém a estrutura
TRUNCATE TABLE clientes;
```

> **Cuidado:** `DROP` e `TRUNCATE` são operações perigosas. Sempre confirme antes de executar em produção.

## Praticando no DBeaver

1. Abra um novo SQL Editor
2. Execute os comandos acima
3. No Database Navigator, clique com o botão direito no schema → **Refresh**
4. Veja a tabela criada e abra o Diagrama ER
