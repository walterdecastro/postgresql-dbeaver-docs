# 21. Funções e Stored Procedures (PL/pgSQL)

O PostgreSQL permite criar funções e procedures usando a linguagem **PL/pgSQL**.

## Função simples

```sql
CREATE OR REPLACE FUNCTION calcula_ticket_medio(cliente INT)
RETURNS NUMERIC AS $$
DECLARE
    media NUMERIC;
BEGIN
    SELECT AVG(valor) INTO media
    FROM pedidos
    WHERE cliente_id = cliente;

    RETURN COALESCE(media, 0);
END;
$$ LANGUAGE plpgsql;
```

Uso:

```sql
SELECT calcula_ticket_medio(1);
```

## Função que retorna tabela

```sql
CREATE OR REPLACE FUNCTION pedidos_do_cliente(cliente INT)
RETURNS TABLE (
    pedido_id INT,
    valor NUMERIC,
    data_pedido DATE
) AS $$
BEGIN
    RETURN QUERY
    SELECT p.id, p.valor, p.data_pedido
    FROM pedidos p
    WHERE p.cliente_id = cliente
    ORDER BY p.data_pedido DESC;
END;
$$ LANGUAGE plpgsql;
```

```sql
SELECT * FROM pedidos_do_cliente(1);
```

## Procedure (não retorna valor)

```sql
CREATE OR REPLACE PROCEDURE atualizar_status_cliente(cliente INT, novo_status BOOLEAN)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE clientes
    SET ativo = novo_status
    WHERE id = cliente;
END;
$$;
```

Chamada:

```sql
CALL atualizar_status_cliente(1, false);
```

## Controle de fluxo

```sql
CREATE OR REPLACE FUNCTION classifica_cliente(cliente INT)
RETURNS TEXT AS $$
DECLARE
    total NUMERIC;
BEGIN
    SELECT COALESCE(SUM(valor), 0) INTO total
    FROM pedidos WHERE cliente_id = cliente;

    IF total > 10000 THEN
        RETURN 'VIP';
    ELSIF total > 3000 THEN
        RETURN 'Premium';
    ELSE
        RETURN 'Regular';
    END IF;
END;
$$ LANGUAGE plpgsql;
```

## Tratamento de erros

```sql
BEGIN
    -- código
EXCEPTION
    WHEN unique_violation THEN
        RAISE NOTICE 'Registro duplicado';
    WHEN OTHERS THEN
        RAISE EXCEPTION 'Erro inesperado: %', SQLERRM;
END;
```
