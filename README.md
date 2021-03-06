# TesteJames

Esse projeto foi desenvolvido utilizando o Angular CLI v10.0.5.

## Servidor de desenvolvimento

Utilize o comando `ng serve` para iniciar seu servidor de desenvolvimento, o app ficará disponível no endereço `http://localhost:4200/`.

## Build

Utilize o comando `ng build` para iniciar a construção do app, o resultado será armazenado no diretório `dist/`. Para gerar uma build de produção, utilize o comando com a flag `--prod`.

## Deploy

Utilize o comando `ng deploy` para realizar o deploy do app.

## Instruções

No meu caso, utilizei o comando  `ng build --prod --output-path docs --base-href /teste-james/` para criar a build do app na pasta docs e fiz o upload para o repositório do git. No git, fui em `settings`, encontrei a sessão do `GitHub Pages`, no campo `source` selecionei a branch `master`, selecionei a pasta `docs` e salvei para gerar o deploy do app. Após algum tempo, o deploy se encontrava disponível no endereço `https://lgjoo.github.io/teste-james/`. 

## Workflow

Para desenvolver este app, primeiramente construi a estrutura em html, de acordo com o layout fornecido, depois meu foco foi deixá-lo funcional, implementando a consulta de estabelecimentos, o salvamento dos dados, utilizando o localstorage, e o roteamento das páginas. E finalmente, após o app estar funcional, realizei ajustes visuais como estilização dos componentes e animações, assim como alguns ajustes no formulário de dados.

Decidi utilizar o localstorage pelos dados serem do formato JSON, o que torna o tratamento deles para o salvamento mais simples, porém, esse método não é seguro para inserção de dados sensíveis, sendo melhor a utilização do indexedDB. A não utilização do indexedDB se dá pela minha falta de familiaridade com o mesmo, não sendo possível implementá-lo no tempo que tive.

Tive dificuldade com o logo no github pages, que não estava sendo possível carregar o arquivo, mesmo tentando diferentes abordagens. Tentei pesquisar sobre esse erro, porém não tive sucesso em encontrar uma solução para este caso específico, sendo o único arquivo svg não carregando.

## Opinião

O desenvolvimento deste teste foi muito interessante, pude utilizar métodos que ainda não havia implementado anteriormente, me fornecendo alguns desafios. Acredito que ainda posso  melhorar como desenvolvedor front-end mme desafiando cada vez mais, e assim inserindo cada vez mais qualidade no que desenvolvo. Esse teste me deu um gostinho do que seria minha realidade caso for aprovado para esta oportunidade, me dando uma sensação de quero mais! 

Então, independente do resultado, muito obrigado por me darem esta oportunidade!