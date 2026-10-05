# 11. Constraints

Constraints (restrições) garantem a **integridade** dos dados no banco. Elas impedem que dados inválidos sejam inseridos ou atualizados.

## Principais Constraints

### PRIMARY KEY

Identifica de forma única cada registro da tabela.

```sql
CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);
```

### FOREIGN KEY

Cria um relacionamento entre duas tabelas.

```sql
CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    cliente_id INTEGER NOT NULL,
    data_pedido DATE DEFAULT CURRENT_DATE,
    CONSTRAINT fk_cliente
        FOREIGN KEY (cliente_id)
        REFERENCES clientes(id)
);
```

### UNIQUE

Garante que não existam valores duplicados em uma coluna.

```sql
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    email VARCHAR(150) UNIQUE NOT NULL
);
```

### NOT NULL

Impede que a coluna aceite valores nulos.

```sql
nome VARCHAR(100) NOT NULL
```

### CHECK

Define uma condição que os valores devem obedecer.

```sql
CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco NUMERIC(10,2) CHECK (preco > 0),
    estoque INTEGER CHECK (estoque >= 0)
);
```

### DEFAULT

Define um valor padrão quando nenhum valor é informado.

```sql
ativo BOOLEAN DEFAULT true,
criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
```

## Constraints compostas

Você pode criar uma chave primária ou única usando mais de uma coluna:

```sql
CREATE TABLE itens_pedido (
    pedido_id INTEGER REFERENCES pedidos(id),
    produto_id INTEGER REFERENCES produtos(id),
    quantidade INTEGER NOT NULL CHECK (quantidade > 0),
    PRIMARY KEY (pedido_id, produto_id)
);
```

## Adicionando constraints depois da criação da tabela

```sql
ALTER TABLE clientes
ADD CONSTRAINT uk_clientes_email UNIQUE (email);

ALTER TABLE pedidos
ADD CONSTRAINT fk_pedidos_cliente
FOREIGN KEY (cliente_id) REFERENCES clientes(id);
```

## Verificando constraints no DBeaver

1. No Database Navigator, expanda a tabela
2. Abra a pasta **Constraints**
3. Ou clique duas vezes na tabela → aba **Constraints** / **Properties**

Constraints são fundamentais para manter a qualidade dos dados. Sempre defina-as no momento da criação das tabelas sempre que possível.
