$(document).ready(function(){
    let qtdPalavras = $('.frase-correta').text().split(" ").length;
    $('.qtdPalavras').html(qtdPalavras);

    $('.campo-digitacao').on('input', function(){
        $('.texto-digitado').text( $(this).val() );
        

    });


})