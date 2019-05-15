$(document).ready(function(){
    $('#animate').click(function(){
        $('#content').animate(
            { "width": "60%", "height": "200px"},
            1000,
            function(){
                $(this).html("ANIMAÇÃO TERMINOU");
            });
    });
})

//coisaElement.animate( propriedades de CSS, duração, 
//funcao que sera executada quando animacao acabar);