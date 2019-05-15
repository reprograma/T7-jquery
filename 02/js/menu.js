$(document).ready(function(){
    //Hover
    // $('li').hover(function(){
    //     // o this do .menu2 abra/apareça $(?).???() -dica: find
    //     $(this).find('.menu2').slideDown();
    // },
    // function(){
    //     $(this).find('.menu2').slideUp();
    // });

    //Click
    $('li').click(function(){
        $(this).find('.menu2').slideToggle();
        $(this).siblings().find('.menu2').slideUp();
    })
});