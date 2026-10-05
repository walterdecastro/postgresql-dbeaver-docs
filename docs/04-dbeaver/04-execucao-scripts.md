# 7. Execução de Scripts SQL

A maior parte do nosso trabalho será escrever e executar SQL. O DBeaver oferece uma experiência excelente para isso.

## Abrindo um editor SQL

1. Botão **SQL** na barra de ferramentas
2. Atalho `Ctrl + ]` (Windows/Linux) ou `Cmd + ]` (macOS)
3. Botão direito na conexão → **SQL Editor → New SQL Script**

## Executando consultas

| Ação                              | Atalho (Win/Linux) | Atalho (macOS)   |
|-----------------------------------|--------------------|------------------|
| Executar a query atual            | `Ctrl + Enter`     | `Cmd + Enter`    |
| Executar o script inteiro         | `Alt + X`          | `Option + X`     |
| Executar do cursor até o final    | `Ctrl + Shift + X` | `Cmd + Shift + X`|

### O que é considerado "query atual"?

O DBeaver identifica a query pela posição do cursor e pelos delimitadores (ponto e vírgula `;`).

```sql
SELECT * FROM clientes;   -- se o cursor estiver aqui, só esta será executada

SELECT * FROM pedidos;
```

## Auto-complete

O DBeaver possui auto-complete inteligente:

- Digite o nome de uma tabela e pressione `Ctrl + Espaço`
- Ele sugere colunas, palavras-chave e joins

## Formatação de código

- Selecione o código
- Pressione `Ctrl + Shift + F` (Windows/Linux) ou `Cmd + Shift + F` (macOS)

## Exportando resultados

1. Execute uma query
2. No painel de resultados, clique com o botão direito
3. Escolha **Export data**
4. Selecione o formato (CSV, Excel, JSON, SQL, etc.)

## Dicas de produtividade

- Use `Ctrl + /` para comentar/descomentar linhas
- Você pode ter vários editores SQL abertos ao mesmo tempo
- Salve os scripts importantes (`Ctrl + S`)
