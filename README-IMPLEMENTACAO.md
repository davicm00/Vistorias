# MDA Engenharia — pacote estático corrigido

## Estrutura obrigatória

Publique estes arquivos juntos na mesma pasta do GitHub Pages: `index.html`, `styles.css` e `script.js`. As páginas `sindicos.html`, `administradoras.html` e `comercios.html` também usam os dois arquivos compartilhados. A pasta `imagens/` deve permanecer no mesmo nível e contém as imagens `.jpg` usadas pelo HTML.

A causa dos quatro problemas relatados foi confirmada na versão pública: `styles.css` estava acessível, mas `script.js` retornava **404**. Sem o JavaScript, o formulário não avança, as abas permanecem na primeira categoria e os contadores não são animados. Nesta versão, `script.js` está incluído no pacote e os contadores começam com `6` e `24` como fallback, mesmo se a animação for bloqueada.

## Formspree

No `index.html`, localize a abertura do formulário:

```html
<form id="lead-qualification-form" class="lead-form" data-endpoint="" novalidate>
```

Depois de criar o formulário no Formspree, substitua apenas o atributo `data-endpoint` pelo endereço recebido:

```html
<form id="lead-qualification-form" class="lead-form" data-endpoint="https://formspree.io/f/SEU_ID_REAL" novalidate>
```

O `script.js` envia os dados para esse endereço quando o atributo não está vazio e, em seguida, prepara o WhatsApp. Não coloque chaves secretas no HTML.

## Imagens e layout

Os arquivos HTML desta versão apontam para `imagens/eletrica.jpg`, `imagens/incendio.jpg`, `imagens/estrutura.jpg` e `imagens/sinalizacao.jpg`. Não altere somente a extensão no nome sem converter o arquivo. Os caminhos diferenciam maiúsculas e minúsculas. A classe `risco-img` deve ser mantida porque o `styles.css` controla o enquadramento e o tamanho visual das imagens.

## Publicação

Substitua os arquivos do site atual por todos os arquivos deste pacote, sem publicar somente o `index.html`. Faça commit e push na branch usada pelo GitHub Pages. Após a publicação, teste:

```text
https://davicm00.github.io/Vistorias/script.js
https://davicm00.github.io/Vistorias/styles.css
https://davicm00.github.io/Vistorias/imagens/eletrica.jpg
```

Os três endereços devem abrir sem erro 404. Se o navegador continuar exibindo a versão anterior, faça uma atualização forçada com `Ctrl + F5` ou abra uma janela anônima.

## Testes realizados

A versão corrigida foi testada localmente com a alternância da aba `Combate a Incêndio`, a alternância do relatório para `Sinalização & fuga`, avanço da etapa 1 do formulário e valores iniciais dos contadores `6` e `24`. O JavaScript também passou pela verificação sintática.

## Contatos

O pacote mantém os contatos que estavam na base entregue: `(61) 99386-2269` e `mdaengenharia.contato@gmail.com`. Confirme esses dados antes da publicação.

## Correção do relatório e do envio

Os exemplos de relatório usam os atributos `data-report-tab` e `data-report-panel`. O `script.js` atualiza simultaneamente o estado `aria-selected` e a propriedade `hidden`, enquanto o CSS contém `.report-demo-panel[hidden]{display:none}` para impedir que o primeiro painel permaneça visualmente sobre os demais.

O envio principal do formulário agora é feito para `https://formspree.io/f/moeqjzrk`. O WhatsApp não abre automaticamente após o envio: ele aparece como um link opcional na mensagem de sucesso. O link direto de WhatsApp no bloco “Prefere resolver agora?” continua funcionando como canal independente.

As mensagens montadas para o WhatsApp usam quebras de linha reais entre os campos; o texto `\\n` não deve aparecer para o usuário.
