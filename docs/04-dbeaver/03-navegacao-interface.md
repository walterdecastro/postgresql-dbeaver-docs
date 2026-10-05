# 6. Navegação pela Interface do DBeaver

Conhecer bem a interface do DBeaver vai aumentar muito a sua produtividade.

## Principais áreas da tela

```
┌──────────────────┬────────────────────────────────────────────┐
│                  │  Abas dos editores (SQL, Diagramas, etc.)  │
│  Database        ├────────────────────────────────────────────┤
│  Navigator       │                                            │
│                  │           Área principal                   │
│  (árvore de      │                                            │
│   objetos)       │                                            │
│                  ├────────────────────────────────────────────┤
│                  │  Resultados / Propriedades / Output        │
└──────────────────┴────────────────────────────────────────────┘
```

### 1. Database Navigator (painel esquerdo)

É a árvore de objetos do banco. A partir dela você consegue:

- Expandir schemas, tabelas, views, functions, etc.
- Clicar duas vezes em uma tabela para ver os dados
- Clicar com o botão direito para criar, editar ou excluir objetos

### 2. Editor SQL

Para abrir um novo editor SQL:

- Clique no botão **SQL Editor** (ícone de folha com o símbolo SQL)
- Ou use o atalho `Ctrl + ]` (Windows/Linux) / `Cmd + ]` (macOS)
- Ou clique com o botão direito na conexão → **SQL Editor → New SQL Script**

### 3. Painel de Resultados

Quando você executa uma query, os resultados aparecem na parte inferior. Você pode:

- Ordenar colunas clicando no cabeçalho
- Filtrar resultados
- Exportar para CSV, Excel, JSON, etc.

## Atalhos úteis

| Ação                        | Windows / Linux     | macOS              |
|----------------------------|---------------------|--------------------|
| Novo editor SQL            | `Ctrl + ]`          | `Cmd + ]`          |
| Executar query             | `Ctrl + Enter`      | `Cmd + Enter`      |
| Executar script inteiro    | `Alt + X`           | `Option + X`       |
| Formatar SQL               | `Ctrl + Shift + F`  | `Cmd + Shift + F`  |

## Personalizando a interface

Você pode reorganizar os painéis arrastando as abas. Também é possível alterar o tema (claro/escuro) em **Window → Preferences → User Interface → Appearance → Theme**.
