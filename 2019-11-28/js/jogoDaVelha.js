function jogo() {
    var jogada = 1;
    var jogX = false;
    var jogBol = false;
    while(jogada <= 9 || pontosX == 3 || pontosY == 3) {

        if (jogada % 2 != 0) {
            jogX = true;
            document.getElementById("pDaVez").innerHTML = "Vez do X";
            jogada++;
        } else {
            jogBol = true;
            document.getElementById("pDaVez").innerHTML = "Vez do O";
            jogada++;
        }
    }

}





