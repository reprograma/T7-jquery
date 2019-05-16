function carregaCarta(){
    $.get("http://localhost:3000/cartas", trocaCartaAleatoria);
}
function trocaCartaAleatoria(cartas, status){
    if(status == 'success'){
            
        let numeroAleatorio = Math.floor(Math.random() * cartas.length);
        $(".titulo").text(cartas[numeroAleatorio].nome);
        $(".tipo").text(cartas[numeroAleatorio].tipo);
        $(".descricao").text(cartas[numeroAleatorio].descricao);
        $('.image').attr("src", cartas[numeroAleatorio].imagem);
        $('.saiba-mais').attr("href", cartas[numeroAleatorio].link);
        
    }else{
        $('.mensagem').text("Não foi possível carregar a carta");
    }
}
$(document).ready(function(){
    carregaCarta();
    $('#novaCarta').click(carregaCarta);
});