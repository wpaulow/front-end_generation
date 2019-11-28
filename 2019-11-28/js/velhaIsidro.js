//jogador 1 = X
//jogador 2 = O

var vezDoJogador = 1;

function joga(idDiv) {
    var textoInterno = document.getElementById(idDiv).innerHTML;
    if (quad != null && quad != null) {
        if (vezDoJogador == 1) {
            document.getElementById(idDiv).innerHTML= "<img width=20% src=imgs/x.png>"; 
            vezDoJogador = 2;
        } else {
            document.getElementById(idDiv).innerHTML= "<img width=20% src=imgs/o.png>";
            vezDoJogador = 1;
        }
    }
    mostraVez();
}

function mostraVez() {
    document.getElementById("soleira").innerHTML = "<h1> Vez do Jogador" + vezDoJogador + "</h1>";
}

