$(document).ready(function() {
    $('#animate').click(function () {
        $('#content').animate(
        {"width" : "60%", "height":"200px"},
        1000, 
        function() {
            $(this).html("Animação terminou");
        });
    });
})

//coisaElement.animate(propriedades de CSS, duração,
//função que será executada quando a animação acabar);
