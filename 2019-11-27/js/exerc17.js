function calculaImposto() {
    var salario = document.getElementById("salario").value;
    var imposto;
    parseFloat(salario);
    //var textoInterno = "";
    //var linhaPadrao = ""
    //console.log("Valor lido do Usuario = " + N);
    
        //console.log("Valor = " + valor);
    if (salario < 1000) {

        // console.log("Valor atendeu ao criterio de requisito");
        /*linhaPadrao = "<div class='row'><div class='col-sm-1'></div><div class='col-sm-2 numeroteste'>" + valor + "</div><div class='col-sm-6 resultadoteste'>" + valor + "^ 2 = " + (valor * valor) + "</div><div class='col-sm-2 checkteste'><span class='glyphicon glyphicon-ok'></span></div><div class='col-sm-1'></div></div>";*/
        //textoInterno = textoInterno + linhaPadrao;
        /*textoInterno += "<div class='row'>";
        textoInterno += "<div class='col-sm-12'> Pessoa isenta de descontos.</div>";*/
        imposto = 0;
    } else if (salario <= 2500) {
        imposto = salario * 0.125;
        /*textoInterno += "<div class='row'>";
        textoInterno += "<div class='col-sm-12'> Primeira faixa de imposto (12,5%). R$ "+ imposto +"</div>";*/
    } else if (salario <= 5000) {
        imposto = salario * 0.25;
        /*textoInterno += "<div class='row'>";
        textoInterno += "<div class='col-sm-12'> Segunda faixa de imposto (25%). R$ "+ imposto +"</div>";*/
    } else {
        imposto = 1300;
        
    } 

    return imposto;

    //document.getElementById("resultado").innerHTML = textoInterno;
}

function totalizarEExibir () {
    var salBruto = document.getElementById("salario").value;
    var imposto = calculaImposto();
    if (imposto == 0){
        document.getElementById("resultado").innerHTML = "Isento de Imposto.";
    } else {
        var salLiquido = salBruto - imposto;
        document.getElementById("resultado").innerHTML = "Imposto Devido R$ " + imposto + "<br> Salário Líquido R$ " + salLiquido + "<br>";
    }
}