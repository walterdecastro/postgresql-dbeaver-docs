# 23. Transações e Concorrência

Transações garantem que um conjunto de operações seja executado de forma **atômica** (tudo ou nada).

## Propriedades ACID

| Propriedade     | Significado                                           |
|-----------------|-------------------------------------------------------|
| **Atomicity**   | Tudo ou nada. Se uma parte falha, tudo é desfeito     |
| **Consistency** | O banco sempre passa de um estado válido para outro   |
| **Isolation**   | Transações concorrentes não se interferem             |
| **Durability**  | Depois do commit, os dados não são perdidos           |

## Controlando transações

```sql
BEGIN;                          -- inicia a transação

UPDATE contas SET saldo = saldo - 100 WHERE id = 1;
UPDATE contas SET saldo = saldo + 100 WHERE id = 2;

-- Se tudo estiver certo:
COMMIT;

-- Se algo der errado:
-- ROLLBACK;
```

No DBeaver você pode controlar transações manualmente pela interface também.

## Níveis de isolamento

```sql
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;  -- padrão do PostgreSQL
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
```

| Nível              | Fenômenos possíveis                  |
|--------------------|--------------------------------------|
| Read Uncommitted   | Sujo, não repetível, fantasma        |
| Read Committed     | Não repetível, fantasma              |
| Repeatable Read    | Fantasma (no PostgreSQL é resolvido) |
| Serializable       | Nenhum                               |

## MVCC (Multi-Version Concurrency Control)

O PostgreSQL usa **MVCC**. Isso significa que:

- Leitores não bloqueiam escritores
- Escritores não bloqueiam leitores
- Cada transação enxerga uma "foto" consistente dos dados no momento em que começou

Isso é uma das grandes vantagens do PostgreSQL em relação a outros bancos.

## Locks e Deadlocks

Em alguns casos o PostgreSQL precisa usar locks:

```sql
-- Lock explícito de linha
SELECT * FROM contas WHERE id = 1 FOR UPDATE;
```

Deadlocks podem acontecer quando duas transações esperam uma pela outra. O PostgreSQL detecta e cancela uma delas automaticamente.

## Boas práticas

- Mantenha as transações **curtas**
- Não faça operações lentas (chamadas de API, por exemplo) dentro de uma transação
- Sempre trate possíveis erros com `ROLLBACK`
- Prefira o nível de isolamento padrão (`READ COMMITTED`) a menos que tenha um motivo claro para usar outro
