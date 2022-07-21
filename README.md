## introdução

Olá, boas-vindas à documentação da T-MEMORY-API, meu projeto final para o curso de desenvolvimento backend da {Reprograma}. Trata-se de uma aplicação que serve para armazenar de forma cronológica as atividades, conquistas e acontecimentos de pessoas trans e travestis dentro de um contexto: seja uma empresa, uma ONG ou qualquer grupo de pessoas que tenha interesse em agrupar essas informações.

Por muito tempo, a única memória cultivada no imaginário coletivo da figura da pessoa trans - em especial, das travestis - é diretamente associada à prostituição e à criminalidade e, ainda que a questão do trabalho sexual precise ser revista despida de moralidades e abordada como um trabalho como qualquer outro, é importante que construa-se história de pessoas trans e travestis exercendo outras atividades, para que sirva como exemplo para a sociedade em geral, mas principalmente para as próximas gerações gênero-dissidentes que precisam de outras referências.

A T-MEMORY é uma iniciativa que acontece com essa finalidade: colocar em evidência que iniciativas e acontecimentos são importantes para a comunidade trans dentro das organizações e grupos de pessoas, para fins de análise, estímulo quanto a novas iniciativas nesse sentido e para que outras consigam se imaginar transitando nesses espaços que demonstram dar importância para a presença e reparação histórica de pessoas trans e travestis.
	
## informações: memória e timeline

Na T-MEMORY, dois tipos de conjunto de informações são armazenados: a unidade básica da aplicação, chamada de memória, que carrega informações sobre um acontecimento específico com relevância para a questão de gênero dissidência, e as timelines, que estruturam as memórias a partir de um assunto, organização, empresa, ONG, etc. Assim, é possível ver o desenvolvimento gradual e histórico dos eventos e de que forma é possível usar da lembrança para impulsionar mais iniciativas nesse sentido.

Como exemplo de estrutura de memória, podemos sugerir:

> {<br>
>     "title": "memoria2",<br>
>     "date": "2021-07-01T17:36:41.544Z",<br>
>     "description": "essa memória deve aparecer por segundo",<br>
>     "category": "testes",<br>
>     "timelineID": "62bf30a95bd3be0daadb34f3"<br>
> }

E como exemplo de estrutura de timeline:

> [{<br>
>     "title": "minha nova timeline",<br>
>     "description": "uma timeline para testes"<br>
> }]

## rotas

A partir das requisições para a API, é possível:

<table>
<tr>
  <td>Verbo</td>
  <td>Rota</td>
  <td>Função</td>
</tr>
<tr>
  <td>get</td>
  <td>"/memories"</td>
  <td>acessar todas as memórias</td>
</tr>
<tr>
  <td>get</td>
  <td>"/memory/:id"</td>
  <td>acessar memória pelo ID</td>
</tr>
<tr>
  <td>get</td>
  <td>"/memories/timeline/:id"</td>
  <td>acessar memórias pela timeline</td>
</tr>
<tr>
  <td>get</td>
  <td>"/memories/category"</td>
  <td>acessar memórias pela categoria</td>
</tr>
<tr>
  <td>get</td>
  <td>"/public/memories"</td>
  <td>acessar todas as memórias públicas (não-arquivadas)</td>
</tr>
<tr>
  <td>get</td>
  <td>"/public/category"</td>
  <td>acessar as memórias públicas (não-arquivadas) por categoria</td>
</tr>
<tr>
  <td>get</td>
  <td>"/public/timeline/:id"</td>
  <td>acessar as memórias públicas (não-arquivadas) por timeline</td>
</tr>
<tr>
  <td>get</td>
  <td>"/public/categoryandtimeline/:id"</td>
  <td>acessar as memórias públicas (não-arquivadas) por categoria e timeline</td>
</tr>
<tr>
  <td>get</td>
  <td>"/archived/category"</td>
  <td>acessar as memórias arquivadas por categoria</td>
</tr>
<tr>
  <td>get</td>
  <td>"/archived/timeline/:id"</td>
  <td>acessar as memórias arquivadas por timeline</td>
</tr>
<tr>
  <td>get</td>
  <td>"/archived/categoryandtimeline/:id"</td>
  <td>acessar as memórias arquivadas por categoria e timeline</td>
</tr>
<tr>
  <td>get</td>
  <td>"/timelines"</td>
  <td>acessar todas as timelines</td>
</tr>
<tr>
  <td>get</td>
  <td>"/timeline/:id"</td>
  <td>acessar timeline por ID</td>
</tr>
<tr>
  <td>get</td>
  <td>"/people"</td>
  <td>acessar todas as pessoas usuárias</td>
</tr>
<tr>
  <td>post</td>
  <td>"/memory"</td>
  <td>cria uma nova memória</td>
</tr>
<tr>
  <td>post</td>
  <td>"/timeline"</td>
  <td>cria uma nova timeline</td>
</tr>
<tr>
  <td>post</td>
  <td>"/person"</td>
  <td>cria uma nova pessoa usuária</td>
</tr>
<tr>
  <td>post</td>
  <td>"/person/login"</td>
  <td>efetua login de uma pessoa usuária</td>
</tr>
<tr>
  <td>patch</td>
  <td>"/memory/:id"</td>
  <td>atualiza memória por ID</td>
</tr>
<tr>
  <td>patch</td>
  <td>"/archive/:id"</td>
  <td>arquiva memória por ID</td>
</tr>
<tr>
  <td>patch</td>
  <td>"/timeline/:id"</td>
  <td>atualiza timeline por ID</td>
</tr>
<tr>
  <td>delete</td>
  <td>"/memory/:id"</td>
  <td>exclui uma memória por ID</td>
</tr>
<tr>
  <td>delete</td>
  <td>"/timeline/:id"</td>
  <td>exclui uma timeline por ID</td>
</tr>
<tr>
  <td>delete</td>
  <td>"/person/:id"</td>
  <td>exclui uma pessoa usuária por ID</td>
</tr>
</table>

A documentação também pode ser acessada [aqui](https://tmemory.herokuapp.com/minha-rota-de-documentacao/).

## banco de dados

Para esta aplicação, utilizei o MongoAtlas DB em conjunto com a dependência mongoose.

## autentificação

Para a manutenção e proteção da segurança das rotas, utilizei o sistema do jsonwebtoken, em conjunto com um encriptador em hash.

## testes

Testei as rotas de CRUD com o auxílio do jest, construindo casos para retorno de cada elemento das schemas de timeline e memória, bem como a alteração, exclusão e criação de objetos.

## contato

[LinkedIn](https://www.linkedin.com/in/agnes-ign%C3%A1cio-a07762125/ "LinkedIn")

[Instagram](https://instagram.com/auroraliquida "Instagram")
