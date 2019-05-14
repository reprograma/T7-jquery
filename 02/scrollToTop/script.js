$(document).ready(function () {
    $(window).scroll(function(){
        if($(this).scrollTop() > 100) { 
            $('.scrollToTop').fadeIn();
        }
        else {
            $('.scrollToTop').fadeOut();
        }
    })

    $("a").click(function() {
        if(this.hash !== "") {
            let caminho = this.hash;

            $('html, body').animate(
                { scrollTop:$(caminho).offset().bottom },
                800,
                function() {
                window.location.hash = caminho;  
            })
        }
    });


});