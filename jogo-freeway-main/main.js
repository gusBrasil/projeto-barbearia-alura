var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
tela.width = 600;
tela.height = 400;

function atualizaTela(){
    renderizaImagens();
    movimentaCarros();
    verificaColisao();
    verificaPontos();
}

setInterval(atualizaTela, 50);
setInterval(mostraPontuacao, 1);