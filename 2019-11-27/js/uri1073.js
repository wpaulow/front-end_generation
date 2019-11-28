var i = 0;

var n = 0;

var htmlGerado = "";

while(n < 5 || n > 2000){
    n = parseInt(prompt("Digite o valor desejado: "));
}
for (i=2; i <= n; i++) {
    if(i % 2 == 0) {
        htmlGerado += "<div class='row'>";
        /*if (i % 2 == 0) {
            htmlGerado += " linhaPar'>";
        } else {
            htmlGerado += " linhaImpar'>";
        }*/
        htmlGerado += "<div class='col-sm-4'>" + i + "</div>";
        htmlGerado += "<div class='col-sm-4'>" + "^2 = " + "</div>";
        htmlGerado += "<div class='col-sm-4'>" + Math.pow(i,2) + "</div>";
        htmlGerado += "</div>";
    }
}
document.getElementById("conteudo").innerHTML = htmlGerado;
/* O innerHTML é um método que troca o conteúdo de uma div. */