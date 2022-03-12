//Personagem
var xPersonagem = 100;
var yPersonagem = 368; 
var wPersonagem = 28;
var hPersonagem = 28;

//teclado
var teclaCima = 38;
var teclaBaixo = 40;
var teclaEsquerda = 37;
var teclaDireita = 39;
var taxaTeclado = 4;

function movimentoPersonagem(evento){
    if(evento.keyCode == teclaCima){
        yPersonagem -= taxaTeclado

    }else if(evento.keyCode == teclaBaixo){
        if(yPersonagem < 365){
            yPersonagem += taxaTeclado
        }
    }else if(evento.keyCode == teclaEsquerda){
        if(xPersonagem -= taxaTeclado){
        }
    }else if(evento.keyCode == teclaDireita){
        if(xPersonagem += taxaTeclado){
        }
    }
}

document.onkeydown = movimentoPersonagem;

//Pontos Personagem
var meusPontos = 0;