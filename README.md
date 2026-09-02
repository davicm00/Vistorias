# MDA Engenharia — Site

Site institucional da MDA Engenharia, preparado para publicação no GitHub Pages.

## Estrutura

- `index.html` — página principal
- `imagens/` — imagens/ilustrações usadas nas abas de riscos

## Publicar no GitHub Pages

1. Crie um novo repositório no GitHub.
2. Envie **todos os arquivos e pastas deste projeto**, mantendo a estrutura.
3. Vá em **Settings → Pages**.
4. Em **Build and deployment**, selecione:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
5. Salve e aguarde a publicação.

O arquivo inicial já está configurado como `index.html`.

## Formulário de contato

O formulário está preparado para Formspree, mas ainda contém:

`https://formspree.io/f/moeqjzrk`

Para receber os contatos por e-mail:

1. Crie uma conta no Formspree.
2. Crie um formulário.
3. Copie o endpoint fornecido pelo Formspree.
4. Abra `index.html`.
5. Substitua `SEU_ID_AQUI` pelo ID real.
6. Faça o upload/commit novamente no GitHub.

## WhatsApp

Os botões e links de WhatsApp já estão configurados para o número informado no arquivo original.

## Observação sobre imagens

Foram incluídas ilustrações SVG locais para que o site funcione imediatamente no GitHub Pages sem depender de arquivos JPG que não estavam presentes no HTML fornecido. Elas podem ser substituídas posteriormente pelas fotografias reais, mantendo os mesmos nomes/endereços ou ajustando os `src` no `index.html`.
