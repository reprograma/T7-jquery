// Código de demonstração em Javascript
// var lis = document.querySelectorAll('li');
// for(var i = 0; i < lis.length ; i++){
//     lis[i].textContent = "BATATA";
// }



//Código em jQuery
function mudaTextoLi(){
    
    $('li').text("BATATA");
    // if($('li').length > 0 ){
    //     console.log($('.lista1 .botao').text());
    // }
}

$(document).ready(function(){
    mudaTextoLi();
});

//Função que faz a mesma coisa que o .ready.
// $(function(){
//     alert("Carregou");
//     console.log("Carregou !");
// })