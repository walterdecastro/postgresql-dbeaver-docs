# 8. Recursos Visuais: Diagrama ER e Outros

Um dos maiores diferenciais do DBeaver é a qualidade dos recursos visuais, especialmente o **Diagrama Entidade-Relacionamento (ER)**.

## Gerando o Diagrama ER

1. No **Database Navigator**, expanda até o schema `public`
2. Selecione as tabelas que deseja visualizar (segure `Ctrl` para selecionar várias)
3. Clique com o botão direito → **View Diagram**

Ou então:

- Clique com o botão direito no schema → **View Diagram**

O DBeaver gera automaticamente o diagrama com os relacionamentos (baseados nas Foreign Keys).

## Navegando e editando o diagrama

- **Zoom**: use a roda do mouse ou os botões de zoom
- **Mover tabelas**: clique e arraste
- **Ver colunas**: as colunas e tipos de dados aparecem dentro de cada tabela
- **Relacionamentos**: as linhas mostram os relacionamentos (1:N, etc.)

### Recursos úteis

- Você pode adicionar ou remover tabelas do diagrama
- É possível salvar o diagrama como imagem (PNG, SVG, etc.)
- O botão direito oferece opções de layout automático

## Outros recursos visuais úteis

### Visualização de dados

Clique duas vezes em qualquer tabela no Navigator. O DBeaver abre uma aba com os dados em formato de planilha, onde você pode:

- Filtrar e ordenar
- Editar registros diretamente (com cuidado!)
- Inserir e excluir linhas

### Comparação de estruturas

O DBeaver permite comparar dois schemas ou duas tabelas (muito útil entre ambientes).

## Dica prática

Sempre que criar novas tabelas e relacionamentos, abra o diagrama ER. Isso ajuda muito a visualizar se o modelo está coerente.

Agora que já dominamos o DBeaver, vamos partir para o conteúdo de SQL propriamente dito.
