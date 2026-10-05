import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'PostgreSQL com DBeaver',
  description: 'Tutorial completo de PostgreSQL do básico ao avançado, com foco total no DBeaver',
  lang: 'pt-BR',
  
  // Importante para GitHub Pages (troque pelo nome do seu repositório)
  base: '/postgresql-dbeaver-docs/',

  themeConfig: {
    logo: '/logo.svg', // opcional
    siteTitle: 'PostgreSQL + DBeaver',

    nav: [
      { text: 'Início', link: '/' },
      { text: 'GitHub', link: 'https://github.com/walterdecastro/postgresql-dbeaver-docs' }
    ],

    sidebar: [
      {
        text: 'Introdução',
        items: [
          { text: 'Bem-vindo', link: '/' }
        ]
      },
      {
        text: 'Parte 1 — Preparação do Ambiente',
        items: [
          { text: '1. Instalação do PostgreSQL', link: '/01-instalacao-postgresql' },
          { text: '2. Configuração Inicial', link: '/02-configuracao-inicial' },
          { text: '3. Ferramentas Nativas (psql e pgAdmin)', link: '/03-ferramentas-nativas' }
        ]
      },
      {
        text: 'Parte 2 — DBeaver: A Ferramenta Principal',
        items: [
          { text: '4. Instalação do DBeaver', link: '/04-dbeaver/01-instalacao-dbeaver' },
          { text: '5. Conectando ao PostgreSQL', link: '/04-dbeaver/02-conexao-postgresql' },
          { text: '6. Navegação pela Interface', link: '/04-dbeaver/03-navegacao-interface' },
          { text: '7. Execução de Scripts SQL', link: '/04-dbeaver/04-execucao-scripts' },
          { text: '8. Recursos Visuais (Diagrama ER)', link: '/04-dbeaver/05-recursos-visuais-er' }
        ]
      },
      {
        text: 'Parte 3 — Nível Básico',
        items: [
          { text: '9. DDL — Data Definition Language', link: '/05-basico/01-ddl' },
          { text: '10. DML — Data Manipulation Language', link: '/05-basico/02-dml' },
          { text: '11. Constraints', link: '/05-basico/03-constraints' },
          { text: '12. Joins', link: '/05-basico/04-joins' }
        ]
      },
      {
        text: 'Parte 4 — Nível Intermediário',
        items: [
          { text: '13. Funções de Agregação e GROUP BY', link: '/06-intermediario/01-agregacoes' },
          { text: '14. Subqueries', link: '/06-intermediario/02-subqueries' },
          { text: '15. Views', link: '/06-intermediario/03-views' },
          { text: '16. Índices Básicos', link: '/06-intermediario/04-indices-basicos' },
          { text: '17. Funções Embutidas', link: '/06-intermediario/05-funcoes-embutidas' }
        ]
      },
      {
        text: 'Parte 5 — Nível Avançado',
        items: [
          { text: '18. Window Functions', link: '/07-avancado/01-window-functions' },
          { text: '19. CTEs (Common Table Expressions)', link: '/07-avancado/02-ctes' },
          { text: '20. Triggers', link: '/07-avancado/03-triggers' },
          { text: '21. Funções e Procedures (PL/pgSQL)', link: '/07-avancado/04-funcoes-procedures-plpgsql' },
          { text: '22. Otimização de Queries', link: '/07-avancado/05-otimizacao-queries' },
          { text: '23. Transações e Concorrência', link: '/07-avancado/06-transacoes-concorrencia' }
        ]
      },
      {
        text: 'Apêndices',
        items: [
          { text: 'Atalhos Úteis do DBeaver', link: '/appendix/dbeaver-atalhos' },
          { text: 'Cheatsheet SQL PostgreSQL', link: '/appendix/cheatsheet-sql' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SEU-USUARIO/postgresql-dbeaver-docs' }
    ],

    footer: {
      message: 'Feito com VitePress',
      copyright: 'PostgreSQL + DBeaver Tutorial'
    },

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3],
      label: 'Nesta página'
    },

    docFooter: {
      prev: 'Anterior',
      next: 'Próximo'
    },

    lastUpdated: {
      text: 'Atualizado em',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    }
  },

  markdown: {
    lineNumbers: true
  }
})
