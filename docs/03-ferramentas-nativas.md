# 3. Ferramentas Nativas (psql e pgAdmin)

Antes de adotarmos o DBeaver como ferramenta principal, é importante conhecer as ferramentas oficiais do PostgreSQL.

## psql — O cliente de linha de comando

O `psql` é o cliente oficial do PostgreSQL. Ele é leve, poderoso e está disponível em qualquer instalação.

### Principais comandos

| Comando          | Descrição                              |
|------------------|----------------------------------------|
| `\l`             | Lista todos os bancos de dados         |
| `\c nome_banco`  | Conecta em um banco específico         |
| `\dt`            | Lista as tabelas do banco atual        |
| `\d nome_tabela` | Mostra a estrutura de uma tabela       |
| `\du`            | Lista os usuários/roles                |
| `\q`             | Sai do psql                            |
| `\?`             | Mostra ajuda dos comandos              |
| `\h CREATE TABLE`| Mostra ajuda de um comando SQL         |

### Exemplo de uso

```bash
psql -U seu_usuario -d curso_postgresql -h localhost
```

Dentro do psql:

```sql
SELECT version();
\dt
\q
```

O `psql` é excelente para automação, scripts e servidores sem interface gráfica.

## pgAdmin

O **pgAdmin** é a ferramenta gráfica oficial do PostgreSQL. Ela é completa, mas muitos desenvolvedores consideram a interface pesada.

Principais características:
- Interface web (roda no navegador)
- Gerenciamento completo de servidores, bancos e tabelas
- Editor SQL
- Visualização de planos de execução

Apesar de ser poderosa, neste tutorial usaremos o **DBeaver** pelos seguintes motivos:

- Interface mais moderna e agradável
- Suporte excelente a múltiplos bancos
- Diagrama ER muito bom
- Melhor experiência de escrita e execução de SQL
- Mais leve e rápido no dia a dia

## Resumo

| Ferramenta | Tipo              | Quando usar                          |
|------------|-------------------|--------------------------------------|
| psql       | Linha de comando  | Scripts, servidores, automação       |
| pgAdmin    | Interface gráfica | Administração completa do PostgreSQL |
| **DBeaver**| Interface gráfica | **Nosso dia a dia neste tutorial**   |

A partir do próximo capítulo, o DBeaver será a ferramenta oficial deste material.
