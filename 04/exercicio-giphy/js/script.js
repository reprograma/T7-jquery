$(document).ready(function(){


    $('#btn-busca').click(function(e){
        //Previne que o form tente enviar algo e mude a url.
        e.preventDefault();
        $('.area-gif').html("");
        //o resto vai aqui
        let palavraBusca = $('#campo-busca').val();
        $.ajax({
            url:`https://api.giphy.com/v1/gifs/search?api_key=feVWB2lk8u2LKTN8z2DldTi4PuofOtqH&q=${palavraBusca}&limit=25&`,
            type :"GET",
            success: function(gifs){
                // guardo data
                let arrayDeGifs = gifs.data;
                $(arrayDeGifs).each(function(){
                    const container = $('<div>').attr('class', 'gif');
                    const gif = $('<img>').attr('src', this.images.fixed_width.url);
                    container.append(gif);
                    $('#exibe-busca').find('.area-gif').append(container);

                });

            },
            error:function(req){
                const errorImage = $("<img>").attr("src", `https://http.cat/${req.status}`);
                $(".area-gif").append(errorImage);
            }
            
        
        });
    });



})