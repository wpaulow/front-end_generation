var numMusica = 0;

function tocaAnterior(){
    numMusica--;
    if (numMusica < 0) {
        document.getElementById("mymusic").src = "../musics/Musica3.mp3"
    } else {
        document.getElementById("mymusic").src = "../musics/Musica" + numMusica
    }
}
function tocaAtual(){
    //console.log("musica atual = "+document.getElementById("mymusic").src);
    document.getElementById("mymusic").src = "../musics/Musica"+numMusica+".mp3";
    document.getElementById("mymusic").play();
    console.log("ah... chato!");
}
function paraTudo(){
    document.getElementById("mymusic").pause();

}
function tocaProxima(){
    numMusica++;
    if (numMusica > 3) {
        document.getElementById("mymusic").src = "../musics/Musica0.mp3";
    } else {
        document.getElementById("mymusic").src = "../musics/Musica" + numMusica +".mp3";
    }
}