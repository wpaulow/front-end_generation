/*function separa() {

    var nome = prompt("Informe seu nome: ");

    var resultado = nome.split(" ");

    console.log(resultado);
}

separa();*/
function nomar() {

    var nome = prompt("Informe o nome: ");
    console.log("Li o nome = " , nome);
    var nomeSeparado = [];

    nomeSeparado += nome.slice(0, nome.indexOf(" "));
    nome = nome.slice(indexOf(" "), nome.length);
    console.log(nome);
    console.log(nomeSeparado);

}


