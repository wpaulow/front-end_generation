var n = parseInt(prompt("Informe um valor de maior do que 20 e menor do que 100: "));
var htmlGerado = "";
var cont = 0

for (i=0; i <= n; i++) {

    if(i % 2 != 0){
        htmlGerado += "<div class='row";
        cont++;
        if (cont == 1) {
            htmlGerado += " linhaRed'>";
        } else if (cont == 2){
            htmlGerado += " linhaBlue'>";
        } else if (cont == 3) {
            htmlGerado += " linhaGreen'>"
        }
        htmlGerado += "<div class='col-lg-12'>" + i + "</div>";
        
        htmlGerado += "</div>";
        if (cont == 3) {
            cont = 0;
        }
        
    }
}
document.getElementById("tabImpares").innerHTML = htmlGerado;
