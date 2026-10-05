# 22. Otimização de Queries

Saber analisar e otimizar queries é uma das habilidades mais valiosas de quem trabalha com banco de dados.

## EXPLAIN e EXPLAIN ANALYZE

```sql
-- Mostra o plano de execução (sem executar)
EXPLAIN SELECT * FROM pedidos WHERE cliente_id = 1;

-- Executa e mostra tempos reais
EXPLAIN ANALYZE SELECT * FROM pedidos WHERE cliente_id = 1;
```

No DBeaver você pode:

1. Escrever a query
2. Clicar com o botão direito → **Explain Execution Plan**
3. Ou usar o atalho / botão específico de Explain

## O que observar no plano

| Elemento              | Significado                              |
|-----------------------|------------------------------------------|
| Seq Scan              | Leitura sequencial (geralmente ruim em tabelas grandes) |
| Index Scan            | Uso de índice (geralmente bom)           |
| Bitmap Heap Scan      | Combinação de índices                    |
| cost=                 | Custo estimado (quanto menor, melhor)    |
| actual time=          | Tempo real de execução                   |

## Estratégias comuns de otimização

1. **Crie índices** nas colunas usadas em WHERE e JOIN
2. **Evite SELECT *** — busque apenas as colunas necessárias
3. **Use LIMIT** quando não precisar de todos os registros
4. **Cuidado com funções nas colunas do WHERE** (elas impedem o uso de índice)
5. **Analise joins** — a ordem e os tipos de join importam
6. **Mantenha estatísticas atualizadas**:

```sql
ANALYZE pedidos;
```

## Exemplo prático

Query lenta:

```sql
SELECT * FROM pedidos WHERE EXTRACT(YEAR FROM data_pedido) = 2024;
```

Versão otimizada (permite uso de índice):

```sql
SELECT * FROM pedidos 
WHERE data_pedido >= '2024-01-01' AND data_pedido < '2025-01-01';
```

## Dica no DBeaver

Use o **Execution Plan** visual do DBeaver. Ele mostra o plano de forma gráfica e facilita a identificação de gargalos.
