$(document).ready(function () {
    // $('li').hover(function(){
    //     $(this).find('.menu2').show();

    // }, function() {
    //     $(this).find('.menu2').hide();
    // });

    $('li').click(function () {
        $(this).find('.menu2').slideToggle(); //abre e fecha o menu2 que clicamos

        $(this).siblings().find('.menu2').slideUp(); //fecha os menus irmãos do menu2 ao clicarmos em um menu2
    })


});