# 20. Triggers

Triggers são ações automáticas que são executadas **antes ou depois** de eventos em uma tabela (INSERT, UPDATE, DELETE).

## Estrutura básica

1. Criar uma **função** que será executada
2. Criar o **trigger** que chama essa função

## Exemplo: Auditoria de alterações

```sql
-- Tabela de log
CREATE TABLE clientes_audit (
    id SERIAL PRIMARY KEY,
    cliente_id INTEGER,
    operacao VARCHAR(10),
    dados_antigos JSONB,
    dados_novos JSONB,
    alterado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Função do trigger
CREATE OR REPLACE FUNCTION log_clientes_alteracao()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'UPDATE' THEN
        INSERT INTO clientes_audit (cliente_id, operacao, dados_antigos, dados_novos)
        VALUES (OLD.id, 'UPDATE', to_jsonb(OLD), to_jsonb(NEW));
        RETURN NEW;
    ELSIF TG_OP = 'DELETE' THEN
        INSERT INTO clientes_audit (cliente_id, operacao, dados_antigos)
        VALUES (OLD.id, 'DELETE', to_jsonb(OLD));
        RETURN OLD;
    ELSIF TG_OP = 'INSERT' THEN
        INSERT INTO clientes_audit (cliente_id, operacao, dados_novos)
        VALUES (NEW.id, 'INSERT', to_jsonb(NEW));
        RETURN NEW;
    END IF;
END;
$$ LANGUAGE plpgsql;

-- Criando o trigger
CREATE TRIGGER trg_clientes_audit
AFTER INSERT OR UPDATE OR DELETE ON clientes
FOR EACH ROW
EXECUTE FUNCTION log_clientes_alteracao();
```

## Tipos de Trigger

| Momento     | Descrição                                      |
|-------------|------------------------------------------------|
| BEFORE      | Executa antes da operação (pode cancelar)      |
| AFTER       | Executa depois da operação                     |
| INSTEAD OF  | Usado principalmente em views                  |

| Nível       | Descrição                                      |
|-------------|------------------------------------------------|
| FOR EACH ROW    | Executa uma vez por linha afetada          |
| FOR EACH STATEMENT | Executa uma vez por comando             |

## Removendo um Trigger

```sql
DROP TRIGGER trg_clientes_audit ON clientes;
DROP FUNCTION log_clientes_alteracao;
```

Triggers são poderosos, mas use com moderação: muitos triggers podem tornar o comportamento do banco difícil de entender e debugar.
