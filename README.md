# PostgreSQL com DBeaver — Do Básico ao Avançado

Tutorial completo de PostgreSQL do básico ao avançado, com **foco total no DBeaver** como ferramenta principal.

Feito com **VitePress** (Node.js).

---

## Como rodar localmente

### 1. Instale as dependências

```bash
npm install
```

### 2. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

O site abrirá em: [http://localhost:5173](http://localhost:5173)

### 3. Gerar a versão de produção

```bash
npm run build
```

Os arquivos finais ficam na pasta `docs/.vitepress/dist`.

---

## Publicando no GitHub Pages

1. Crie um repositório no GitHub (ex: `postgresql-dbeaver-docs`)
2. Faça o push deste projeto
3. **Importante:** abra o arquivo `docs/.vitepress/config.mts` e troque:
   - `SEU-USUARIO` pelo seu usuário do GitHub
   - O valor de `base` caso o nome do repositório seja diferente
4. Vá em **Settings → Pages**
5. Em **Source**, escolha **GitHub Actions**
6. Faça um push na branch `main`

O workflow já está configurado e fará o deploy automaticamente.

Depois de alguns minutos o site ficará disponível em:

```
https://SEU-USUARIO.github.io/postgresql-dbeaver-docs/
```

---

## Estrutura do Projeto

```
postgresql-dbeaver-docs/
├── package.json
├── docs/
│   ├── .vitepress/
│   │   └── config.mts          ← Configuração do site + sidebar
│   ├── index.md                ← Página inicial
│   ├── 01-instalacao-postgresql.md
│   ├── 02-configuracao-inicial.md
│   ├── 03-ferramentas-nativas.md
│   ├── 04-dbeaver/             ← Tudo sobre DBeaver
│   ├── 05-basico/              ← Nível básico
│   ├── 06-intermediario/       ← Nível intermediário
│   ├── 07-avancado/            ← Nível avançado
│   └── appendix/                ← Apêndices
└── .github/workflows/          ← Deploy automático
```

---

## Comandos úteis

| Comando            | Descrição                          |
|--------------------|------------------------------------|
| `npm run dev`      | Sobe o site em modo desenvolvimento |
| `npm run build`    | Gera a versão final (produção)     |
| `npm run preview`  | Visualiza a versão de produção     |
