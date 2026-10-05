# 5. Conectando o DBeaver ao PostgreSQL

Agora vamos criar a conexão entre o DBeaver e o banco de dados que preparamos.

## Passo a passo

1. Abra o DBeaver
2. Clique no botão **Nova Conexão** (ícone de plugue com o sinal de +) ou vá em **Database → New Database Connection**
3. Na lista de bancos, selecione **PostgreSQL** e clique em **Next**

### Preenchendo os dados da conexão

| Campo          | Valor                          |
|----------------|--------------------------------|
| Host           | `localhost`                    |
| Port           | `5432`                         |
| Database       | `curso_postgresql`             |
| Username       | `seu_usuario`                  |
| Password       | a senha que você definiu       |

Marque a opção **Save password** se quiser que o DBeaver lembre da senha.

### Testando a conexão

Clique no botão **Test Connection**.

Na primeira vez o DBeaver vai baixar o driver do PostgreSQL automaticamente. Aceite e aguarde.

Se aparecer a mensagem **Connected**, está tudo certo! Clique em **Finish**.

## Verificando a conexão

No **Database Navigator** (painel esquerdo) você deverá ver a conexão criada. Expanda:

```
curso_postgresql
 └── Databases
      └── curso_postgresql
           ├── Schemas
           │    └── public
           └── ...
```

## Dicas

- Você pode criar várias conexões (desenvolvimento, homologação, produção)
- Clique com o botão direito na conexão → **Edit Connection** para alterar qualquer dado
- Use cores diferentes nas conexões para não confundir ambientes (botão direito → **Connection color**)

Agora que a conexão está feita, vamos conhecer a interface do DBeaver.
