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

Decidi utilizar o indexedDB simplesmente por se tratar de dados sensíveis, precisando de maior segurança no armazenamento, ao contrário do localstorage e sessionstorage.

## Opinião

O desenvolvimento deste teste foi muito interessante, pude utilizar métodos que ainda não havia implementado anteriormente, me fornecendo alguns desafios. Porém, acredito que ainda posso e devo melhorar como desenvolvedor front-end, inserindo cada vez mais qualidade no que desenvolvo. Esse teste me deu um gostinho do que seria minha realidade caso for aprovado para esta oportunidade, me dando uma sensação de quero mais! 

Então, independente do resultado, muito obrigado por me darem esta oportunidade!