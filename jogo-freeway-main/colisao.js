function resetaPosicao(){
    yPersonagem = 368;
    xPersonagem = 100;
}

function verificaColisao(){
    for(let contador = 0; contador < carros.length; contador++){
        if(
            (xPersonagem + wPersonagem) > xCarros[contador] && 
            xPersonagem < (xCarros[contador] + wCarros[contador]) &&
            yPersonagem < (yCarros[contador] + hCarros[contador]) &&
            yPersonagem + hPersonagem > yCarros[contador]
        ){
            resetaPosicao();
            somColisao();
            if(meusPontos > 0){
                meusPontos--
            };
        };
        
    };
}

function verificaPontos(){
    if(yPersonagem < 15){
        resetaPosicao();
        somPontuacao();
        meusPontos++
    };
}