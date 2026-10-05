# 1. Instalação do PostgreSQL

Neste capítulo vamos instalar o PostgreSQL nos principais sistemas operacionais. Ao final você terá o banco de dados rodando e pronto para conexão.

## Windows

1. Acesse o site oficial: [https://www.postgresql.org/download/windows/](https://www.postgresql.org/download/windows/)
2. Baixe o instalador da **EnterpriseDB** (recomendado)
3. Execute o instalador e siga os passos:
   - Escolha o diretório de instalação (pode deixar o padrão)
   - Selecione os componentes (deixe todos marcados)
   - Defina a senha do usuário `postgres` (**anote essa senha!**)
   - Porta padrão: `5432`
   - Locale: pode deixar o padrão ou escolher `Portuguese, Brazil`
4. Ao final, desmarque a opção de abrir o Stack Builder (não precisamos dele agora)

### Verificando a instalação

Abra o **SQL Shell (psql)** que foi instalado junto e pressione Enter em todas as perguntas até chegar na senha. Digite a senha do usuário `postgres` e pressione Enter.

Se aparecer o prompt `postgres=#`, a instalação foi bem-sucedida.

## macOS

A forma mais simples e recomendada é usando o **Homebrew**:

```bash
# Instala o Homebrew (caso ainda não tenha)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Instala o PostgreSQL
brew install postgresql@16

# Inicia o serviço
brew services start postgresql@16
```

### Verificando

```bash
psql postgres
```

Se entrar no prompt do PostgreSQL, está tudo certo. Para sair digite `\q`.

## Linux (Ubuntu / Debian)

```bash
# Atualiza os pacotes
sudo apt update

# Instala o PostgreSQL
sudo apt install postgresql postgresql-contrib

# Verifica se o serviço está rodando
sudo systemctl status postgresql
```

### Acessando o PostgreSQL

Por padrão o PostgreSQL no Linux usa autenticação peer. Para entrar:

```bash
sudo -u postgres psql
```

## Versão recomendada

Recomendamos usar a versão **16** ou **17** (a mais recente estável).

Para verificar a versão instalada:

```sql
SELECT version();
```

## Próximos passos

Agora que o PostgreSQL está instalado, vamos fazer algumas configurações iniciais importantes no próximo capítulo.
