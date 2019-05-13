// Javascript
// var lis = document.querySelectorAll('li');
// for(var i = 0; i < lis.length ; i++){
//     lis[i].textContent = "BATATA";
// }

// $(function(){
//     alert("Carregou");
//     console.log("Carregou !");
// })


function mudaTextoLi(){
    if($('li').length > 0 ){
        console.log($('.lista1 .botao').text());
    }
}

$(document).ready(function(){
    mudaTextoLi();
});

