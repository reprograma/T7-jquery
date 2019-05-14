$(document).ready(function() {
    $('#senha').keyup(function(){
        let senha = $(this).val();
        let forca = 0;
        let aceito = "Não"

        if(senha.length > 4){
            forca += 25;
        }

        // Checa se há números na senha
        let regNumerico = new RegExp(/[0-9]/i);
        if(regNumerico.test(senha)){
            forca += 25;
        }

        //Checa se há letras na senha
        let regCaractere = new RegExp(/[a-z]/i);
        if(regCaractere.test(senha)){
            forca += 25;
        }
        //Checa se há caracteres especiais
        let regCaractereEspecial = new RegExp(/[^a-z0-9]/i);
        if(regCaractereEspecial.test(senha)){
            forca += 25;
        }
        
        //Indicador de sucesso
        if(forca >= 75){
            $('input#senha').removeClass('erro');
            $('input#senha').addClass('sucesso');
            //variável para retorno de aceite.
            aceito = "Sim"
        }else{

            $('input#senha').removeClass('sucesso');
            $('input#senha').addClass('erro');
        }

        $('#forca').html(`Força:${forca} - Senha:${senha} - Aceito:${aceito}`);
    })
});