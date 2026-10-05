# 2. Configuração Inicial

Após a instalação, é importante fazer algumas configurações básicas para deixar o ambiente mais seguro e confortável para desenvolvimento.

## Arquivos de configuração principais

O PostgreSQL possui dois arquivos principais de configuração:

| Arquivo              | Função                                      |
|----------------------|---------------------------------------------|
| `postgresql.conf`    | Configurações gerais do servidor            |
| `pg_hba.conf`        | Regras de autenticação e acesso             |

### Localização dos arquivos

- **Windows**: normalmente em `C:\Program Files\PostgreSQL\<versão>\data\`
- **macOS (Homebrew)**: `/opt/homebrew/var/postgresql@16/` ou `/usr/local/var/postgresql@16/`
- **Linux**: `/etc/postgresql/<versão>/main/`

## Criando um usuário e um banco de dados

É uma boa prática **não** usar o usuário `postgres` no dia a dia. Vamos criar um usuário próprio.

Entre no psql como superusuário:

```bash
# Windows / macOS
psql -U postgres

# Linux
sudo -u postgres psql
```

Agora execute os comandos:

```sql
-- Cria um usuário (troque 'seu_usuario' e a senha)
CREATE USER seu_usuario WITH PASSWORD 'sua_senha_segura';

-- Cria um banco de dados
CREATE DATABASE curso_postgresql OWNER seu_usuario;

-- Dá todas as permissões no banco para o usuário
GRANT ALL PRIVILEGES ON DATABASE curso_postgresql TO seu_usuario;
```

## Testando a conexão com o novo usuário

Saia do psql (`\q`) e tente conectar com o novo usuário:

```bash
psql -U seu_usuario -d curso_postgresql -h localhost
```

Se pedir a senha e entrar, está tudo configurado corretamente.

## Configurações recomendadas (opcional)

No arquivo `postgresql.conf` você pode ajustar:

```conf
# Permite conexões de qualquer endereço (apenas para desenvolvimento local)
listen_addresses = '*'

# Quantidade de conexões simultâneas
max_connections = 100

# Memória para operações de ordenação
work_mem = 16MB
```

Após alterar o `postgresql.conf`, é necessário reiniciar o serviço:

```bash
# macOS
brew services restart postgresql@16

# Linux
sudo systemctl restart postgresql
```

## Resumo do que fizemos

- Criamos um usuário próprio
- Criamos um banco de dados chamado `curso_postgresql`
- Garantimos que conseguimos conectar com esse usuário

No próximo capítulo faremos uma breve apresentação das ferramentas nativas do PostgreSQL e, em seguida, partiremos para o **DBeaver**.
