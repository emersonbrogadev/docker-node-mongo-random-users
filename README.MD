# new BlogPost(); [Passo-a-Passo] Criando uma aplicação com NodeJS, usando Express, Mongo, Docker e Babel

[![new BlogPost(); [Passo-a-Passo] Criando uma aplicação com NodeJS, usando Express, Mongo, Docker e Babel](https://emersonbroga.com/wp-content/uploads/2019/09/passo-a-passo-criando-uma-aplicacao-com-nodejs-usando-express-mongo-docker-e-babel.jpg)](https://emersonbroga.com/passo-a-passo-criando-uma-aplicacao-com-nodejs-usando-express-mongo-docker-e-babel/)

[Passo-a-Passo] Criando uma aplicação com NodeJS, usando Express, Mongo, Docker e Babel

Hoje eu quero mostrar o passo-a-passo pra você entender e aprender como configurar um projeto usando diversas coisas ao mesmo tempo, como Docker, Node, Express, Mongo e Babel.

<div id="toc_container">
<p class="toc_title"><code>Conteúdo do post</code></p>
<ul class="toc_list">
<li><a href="https://emersonbroga.com/passo-a-passo-criando-uma-aplicacao-com-nodejs-usando-express-mongo-docker-e-babel/escopo">Escopo do Projeto</a></li>
<li><a href="https://emersonbroga.com/passo-a-passo-criando-uma-aplicacao-com-nodejs-usando-express-mongo-docker-e-babel/pre-requisitos">Pré-requisitos</a></li>
<li><a href="https://emersonbroga.com/passo-a-passo-criando-uma-aplicacao-com-nodejs-usando-express-mongo-docker-e-babel/infraestrutura">Criando a infraestrutura</a></li>
<li><a href="https://emersonbroga.com/passo-a-passo-criando-uma-aplicacao-com-nodejs-usando-express-mongo-docker-e-babel/instalando-express">Instalando Express</a></li>
<li><a href="https://emersonbroga.com/passo-a-passo-criando-uma-aplicacao-com-nodejs-usando-express-mongo-docker-e-babel/rodando-o-projeto">Rodando o projeto</a></li>
<li><a href="https://emersonbroga.com/passo-a-passo-criando-uma-aplicacao-com-nodejs-usando-express-mongo-docker-e-babel/definindo-volumes">Definido volumes com docker-compose</a></li>
<li><a href="https://emersonbroga.com/passo-a-passo-criando-uma-aplicacao-com-nodejs-usando-express-mongo-docker-e-babel/instalando-mongodb">Instalando o MongoDB em nosso projeto</a></li>
<li><a href="https://emersonbroga.com/passo-a-passo-criando-uma-aplicacao-com-nodejs-usando-express-mongo-docker-e-babel/conectando-ao-mongodb">Conectando ao mongodb com mongo client</a></li>
<li><a href="https://emersonbroga.com/passo-a-passo-criando-uma-aplicacao-com-nodejs-usando-express-mongo-docker-e-babel/escrevendo-es6">Escrevendo JavaScript Moderno (ES6+) no NodeJs com Babel</a></li>
<li><a href="https://emersonbroga.com/passo-a-passo-criando-uma-aplicacao-com-nodejs-usando-express-mongo-docker-e-babel/refatorando-o-callback-hell">Refatorando e acabando com o callback hell</a></li>
<li><a href="https://emersonbroga.com/passo-a-passo-criando-uma-aplicacao-com-nodejs-usando-express-mongo-docker-e-babel/listando-dados-com-mongodb">Listando os dados com MongoDB</a></li>
<li><a href="https://emersonbroga.com/passo-a-passo-criando-uma-aplicacao-com-nodejs-usando-express-mongo-docker-e-babel/organizando-rotas-no-express">Organizando rotas em um projeto com Express</a></li>
<li><a href="https://emersonbroga.com/passo-a-passo-criando-uma-aplicacao-com-nodejs-usando-express-mongo-docker-e-babel/configurando-adminmongo-docker">Configurando o adminmongo no Docker</a></li>
<li><a href="https://emersonbroga.com/passo-a-passo-criando-uma-aplicacao-com-nodejs-usando-express-mongo-docker-e-babel/faker-node-js">Adicionando o Faker ao projeto com NodeJs</a></li>
<li><a href="https://emersonbroga.com/passo-a-passo-criando-uma-aplicacao-com-nodejs-usando-express-mongo-docker-e-babel/configurando-variaveis-de-ambiente">Configurando variáveis de ambiente e caminhos absolutos no nodejs com docker</a></li>
<li><a href="https://emersonbroga.com/passo-a-passo-criando-uma-aplicacao-com-nodejs-usando-express-mongo-docker-e-babel/conclusao">Conclusão</a></li>
</ul>
</div>


#### Se ainda não segue, conheça as nossas Redes Sociais

<a href="https://emersonbroga.com/e/participe/?utm_source=github&utm_medium=react-in-one-minute&utm_campaign=2019-08-21"><picture>
<source type="image/webp" srcset="https://emersonbroga.com/wp-content/uploads/2019/08/subscription_banner.jpg.webp">
<img src="https://emersonbroga.com/wp-content/uploads/2019/08/subscription_banner.jpg">
</picture>
</a>

[➜ Aprenda ES6](https://amzn.to/2J4XnLg)

[➜ Veja as dicas no Instagram](https://www.instagram.com/emersonbrogadev/)

[➜ Assista nosso canal no YouTube](https://www.youtube.com/c/emersonbroga/)

[➜ Curta nossa página no Facebook](https://www.facebook.com/emersonbrogadev/)

[➜ Não perca as atualizações no Twitter](https://www.twitter.com/emersonbrogadev/)

[➜ Veja os repositórios no Github](https://www.twitter.com/emersonbrogadev/)
