$(document).ready(function () {
    
    $(window).scroll(function(){
        if($(this).scrollTop() >100){
            $('.scrollToTop').fadeIn();
        }else{
            $('.scrollToTop').fadeOut();
        }
    });

    $("a").click(function (event) {
        //Existe um hash ? - checagem
        if (this.hash !== "") {
            let hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 3000, function(){
                //Coloca na url do navegador
                window.location.hash = hash;
            });

        }
    })
});