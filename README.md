# T7-jquery
Turma 7 | Front-end | 2019 | Semana 10 | jQuery

> Nessa semana aprenderemos sobre [jQuery](https://jquery.com/), tendo como base [esse material](https://github.com/reprograma/t5-jquery)

---

### [Aula 1](#aula-1)
#### Resumo: 
Nessa aula veremos alguns exercícios utilizando jQuery com comparação do javascript puro.
* [O que é ?](#o-que-é-jquery-?)
* [Como surgiu ?](#como-surgiu-?)
* [Vantagens](#vantagens)
* [Como utilizar](#como-utilizar-?)
* [Sintaxe](#sintaxe)
* [Exercícios](#exercícios)
* [Conteúdos adicionais](#conteúdos-adicionais)

### [Aula 2](#aula-2)
Nessa aula fizemos exercícios com conceitos aprendidos na aula anterior e aprendemos conceitos de animate.
* [Animate](#animate)


## Aula 1

#### O que é jQuery ?
 jQuery é uma biblioteca open-source com base em JavaScript criada para facilitar o desenvolvimento front-end. Seu lema é write less, do more(Escreva menos, faça mais) 
#### Como surgiu ? 
 Foi criada em 2006 por John Resig ao perceber que seria possível reduzir a forma de escrita de algumas funções em javascript, criando assim o jQuery.
#### Vantagens
 * Facilidade de leitura e escrita do código
 * Open-source
 * Seleção e manipulação de elementos HTML
 * Manipulação de CSS e semelhança de seletores
 * uso do AJAX 
 * Navegação pelo DOM
 * Eventos, efeitos e animações
#### Como utilizar ?
 Você pode fazer o download no site ou utilizar Content Delivery Network(CDN)
 
```<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>```

(Google CDN)


```<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>```

(Microsoft CDN)

#### Sintaxe
$(seletor).ação()
$: acesso ao jQuery
Seletor: para encontrar os elementos html
Ação: o que eu quero realizar 

Nessa aula vimos como utilizar os seletores( elemento, classe e id)

``` $('li').text("Batata") ```

``` $('.lista1 li').text() ```

``` $('.lista1 > li').text("Batata") ```

``` $('.lista1).find('li).text("Batata") ```

Para visualizar a performance:
https://jsperf.com/jquery-child-selector-vs-find/3


E sobre os métodos de inicialização do jQuery nas nossas páginas:

```     
$(document).ready(function(){
    //Código vai aqui
});
```

E que a chamada acima equivale a 
```     
$(function(){
    //Código vai aqui 
})
```

Como adicionar e modificar attributos dos elementos utilizando .attr:

``` $('a').attr('href', 'https://www.google.com.br'); ```

Eventos de mouse e click:
ex: double click
```     
$("p").dblclick(function(){
    alert("p clicado");
}) 
```
E vimos sobre on e one)

On executará todas as vezes que 'mouseenter' ocorrer.
```     
$("p").on("mouseenter", function(){
    alert("mouse no p");
})
```

One executará apenas uma vez.
```     
$("p").one("mouseenter", function(){
    alert("mouse no p");
})
```

Show
```
$('#show').click(function(){
    $('p').show();
});

```
Hide
```

$('#hide').click(function(){
    $('p').hide();
});
```

Toggle
```
$('#toggle').click(function(){
    $('.dois').toggle();
});
```
FadeIn
```
$('#div1').fadeIn();
```

FadeOut
```
$('#div2').fadeOut("slow");
```
FadeToggle
```
$('#div3').fadeToggle(2000);
```
#### Exercícios
 - Exemplos dados
 - senha.html

#### Conteúdos adicionais
[Git flow - github](https://datasift.github.io/gitflow/IntroducingGitFlow.html)

[Git flow - gitlab](https://docs.gitlab.com/ee/workflow/gitlab_flow.html)

[Git flow - bitbucket](https://br.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

[RegEx101](https://regex101.com/r/MrUCVz/1)

[RegEx - Livro](https://aurelio.net/regex/guia/)


## Aula 2

#### Animate
Vimos o [animate](http://api.jquery.com/animate/) que segue o modelo 

```
$('elemento').animate();
```

Exemplo:
```
$('#animate').click(function(){
    $('#content').animate(
        { "width": "60%", "height": "200px"},
        1000,
        function(){
            $(this).html("ANIMAÇÃO TERMINOU");
        });
});
```

Também utilizando scrollTop e offset:

```
$('html, body').animate({
    scrollTop: $(hash).offset().top
}, 3000, function(){
    //Coloca na url do navegador
    window.location.hash = hash;
});
```

## Aula 3

#### AJAX 
AJAX = Asynchronous JavaScript And XML
Javascript e XML assincronos.
É uma combinação de várias tecnologias para facilitar a comunicação entre o client e o server, fazendo com que seja possível
- Trazer dados sem recarregar páginas.
- Enviar dados sem interromper o funcionamento de outras funcionalidades.
- Fazer requisições http de forma paralela sem interromper o funcionamento.

O XML presente na descrição do nome pode causar alguns enganos, mesmo que o AJAX consiga utilizar XML, também é comum utilizarmos JSON(Javascript Object Notation)

Utilizaremos o AJAX para consultar arquivos, fazer requisições em servidores externos para coletar e enviar informações e consumiremos APIs ( Application Programming Interface).

Com os exercícios vimos a forma de fazer uma requisição http utilizando javascript puro(Exercício requisicao-javascript), consumindo a API https://jsonplaceholder.typicode.com/photos e outro utilizando jQuery(Exercício requisicao-jquery), consumindo a mesma API. Com isso passamos pelos seguintes conceitos:

- Como utilizar AJAX nas requisições entre cliente e servidor:

![Imagem explicativa de como ocorre o consumo de uma API](/imgs/comunicacao-ajax-API.jpeg)

- Métodos de API e HTTP Status Code:

Método | O que faz        | Status de retorno |
-------|------------------|-------------------|
GET    | Traz informações | 200               |
POST   | Cria um novo item| 201               |
PUT    | Atualiza um item | 200               |
DELETE | Remove um item   | 200               |

Podemos encontrar mais sobre http status code [aqui](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)

E também utilizamos o https://http.cat/ que é um site que retorna imagens de gatos para ilustrar os status.

![Vamo lá](https://http.cat/100)

Ao utilizar o jQuery para consumir uma API, usamos o [$.ajax](http://api.jquery.com/jquery.ajax/):
```
$(document).ready(function(){
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/photosdhsau",
        type: "GET",
        success: function(photos){
            $(photos).each(function(){
                let container = $("<div>");
                container.attr("class", `photo${this.id}`);
                let photoTitle = $("<h2>").text(this.title);
                let photoImg = $("<img>").attr("src", this.url);

                container.append(photoTitle);
                container.append(photoImg);

                $('#root').append(container);

            });
        },
        error: function(req){
            let errorImage = $("<img>").attr("src", `https://http.cat/${req.status}`);
            $("#root").append(errorImage);

        }
    })

});

```
É uma função do jQuery que nos permite enviar, receber e tratar resultados de requisições assíncronas(ajax).

Também fizemos um exercício de expor informações de um arquivo .json(JSON - javascript object notation - é um formato leve para troca de informações entre sistemas) utilizando
[$.getJSON](https://api.jquery.com/jQuery.getJSON/#jQuery-getJSON-url-data-success) :

```
function carregaCarta(){
    $.getJSON("tarot.json", trocaCartaAleatoria);
}
function trocaCartaAleatoria(cartas, status){
    if(status == 'success'){
            
        let numeroAleatorio = Math.floor(Math.random() * cartas.length);
        $(".titulo").text(cartas[numeroAleatorio].nome);
        $(".tipo").text(cartas[numeroAleatorio].tipo);
        $(".descricao").text(cartas[numeroAleatorio].descricao);
        $('.image').attr("src", cartas[numeroAleatorio].imagem);
        $('.saiba-mais').attr("href", cartas[numeroAleatorio].link);
        
    }else{
        $('.mensagem').text("Não foi possível carregar a carta");
    }
}
$(document).ready(function(){
    carregaCarta();
    $('#novaCarta').click(carregaCarta);
});
```
