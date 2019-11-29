function coisar() {
    var nome = document.getElementById("nomao").value;
    var pos = 0;
    var primPalavra;
    var pNomes = [];
    var posVetor = 0;
    console.log("Li o nome = " + nome);
    console.log("Tamanho da palavra = " + nome.length);

    
    console.log("O primeiro espaco em branco esta na posicao "+pos);
    while (pos >= 0){
        primPalavra = nome.slice(0, pos);
        console.log("Extraida a palavra = "+primPalavra);
        nome = nome.slice(pos+1);
        pos = nome.indexOf(" ");
    }
    primPalavra = nome;
    console.log("Extraida a palavra = "+primPalavra);
    
    console.log(palavras);
  
}