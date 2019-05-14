# T7-jquery
Turma 7 | Front-end | 2019 | Semana 10 | jQuery

> Nessa semana aprenderemos sobre [jQuery](https://jquery.com/), tendo como base [esse material](https://github.com/reprograma/t5-jquery)

---

### [Aula 1](#aula-01)
#### Resumo: 
Nessa aula veremos alguns exercícios utilizando jQuery com comparação do javascript puro.
* [O que é ?](#o-que-é-jquery)
* [Como surgiu ?](#como-surgiu-?)
* [Vantagens](#vantagens)
* [Como utilizar](#como-utilizar-?)
* [Sintaxe](#sintaxe)
* [Exercícios](#exercícios)
* [Conteúdos adicionais](#conteúdos-adicionais)


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




