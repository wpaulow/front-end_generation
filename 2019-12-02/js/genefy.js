var numMusica = 0;
var path = "C:/Users/Generation/Documents/generation/front-end_generation/2019-12-02";
function tocaAnterior(){
    console.log("musica atual = "+document.getElementById("mymusic").src);
    numMusica--;
    if (numMusica < 0) {
        document.getElementById("mymusic").src = path + "/audio/Musica03.mp3"
        document.getElementById("mymusic").play();
        numMusica = 3;
    } else {
        document.getElementById("mymusic").src = path + "/audio/Musica0" + numMusica + ".mp3";
        document.getElementById("mymusic").play();

    }
}
function tocaAtual(){
    console.log("musica atual = "+document.getElementById("mymusic").src);
    if (numMusica == 0) {
        document.getElementById("mymusic").play();
    } else {
        document.getElementById("mymusic").src = path + "/audio/Musica0"+numMusica+".mp3";
        document.getElementById("mymusic").play();
    }
    //console.log("ah... chato!");
}
function paraTudo(){
    document.getElementById("mymusic").pause();

}
function tocaProxima(){
    /*numMusica++;
    if (numMusica > 3) {
        document.getElementById("mymusic").src = path + "/audio/Musica0.mp3";
        numMusica = 0;
    } else {
        document.getElementById("mymusic").src = path + "/audio/Musica0" + numMusica +".mp3";
    } */
    
    numMusica++;
    if (numMusica > 3) {
        numMusica = 0;  
        document.getElementById("mymusic").src = path + "/audio/Musica0.mp3";
        document.getElementById("mymusic").play();
    } else {
        document.getElementById("mymusic").src = path + "/audio/Musica0" +numMusica+".mp3";
        document.getElementById("mymusic").play();
    }
    //document.getElementById("mymusic").src = path + "/audio/Musica0.mp3";
    //document.getElementById("mymusic").play();
    
}