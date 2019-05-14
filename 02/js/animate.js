$(document).ready(function() {
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