# 4. Instalação do DBeaver

O **DBeaver** será nossa ferramenta principal durante todo o tutorial. Ele é um cliente universal de banco de dados, gratuito (versão Community) e extremamente poderoso.

## Community vs Enterprise

| Versão       | Preço     | Principais diferenças                          |
|--------------|-----------|------------------------------------------------|
| Community    | Gratuita  | Suficiente para a grande maioria dos casos     |
| Enterprise   | Paga      | Recursos extras (mais diagramas, IA, etc.)     |

Para este tutorial a versão **Community** é perfeita.

## Download e Instalação

Acesse o site oficial: [https://dbeaver.io/download/](https://dbeaver.io/download/)

### Windows

1. Baixe o instalador (Windows Installer)
2. Execute e siga o assistente (Next → Next → Finish)
3. Na primeira abertura ele pode pedir para baixar drivers — aceite

### macOS

1. Baixe o arquivo `.dmg`
2. Abra o arquivo e arraste o DBeaver para a pasta Applications
3. Na primeira abertura, se aparecer aviso de segurança, vá em **Preferências do Sistema → Privacidade e Segurança** e permita a abertura

### Linux

```bash
# Ubuntu / Debian (via Snap)
sudo snap install dbeaver-ce
```

Ou baixe o `.tar.gz` no site oficial e extraia.

## Primeira abertura

Ao abrir o DBeaver pela primeira vez:

1. Ele pode perguntar se deseja criar uma conexão de amostra — pode pular
2. A interface principal será carregada
3. No lado esquerdo fica o **Database Navigator**
4. No centro fica a área de trabalho (editores SQL, diagramas, etc.)

## Dica importante

Mantenha o DBeaver atualizado. Vá em **Help → Check for Updates** periodicamente.

No próximo capítulo vamos conectar o DBeaver ao PostgreSQL.
