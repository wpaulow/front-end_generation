var valor = parseInt(prompt("Digite o valor da tabuada: "));
var htmlGerado = "";

for (i=0; i <= 10; i++) {
    
    htmlGerado += "<div class='row";
    if (i % 2 == 0) {
        htmlGerado += " linhaPar'>";
    } else {
        htmlGerado += " linhaImpar'>";
    }
    htmlGerado += "<div class='col-sm-4'>" + valor + "</div>";
    htmlGerado += "<div class='col-sm-4'>" + i + "</div>";
    htmlGerado += "<div class='col-sm-4'>" + (valor*i) + "</div>";
    htmlGerado += "</div>";
}

document.getElementById("tabuada").innerHTML = htmlGerado;