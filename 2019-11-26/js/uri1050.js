function linha(){
    document.write("<br>");
}

var nDDD = prompt("Digite o DDD: ");

function valida() {
    
    //var email = document.getElementById("email").value;
    //var senha = document.getElementById("password").value;
    
    /*if (nDDD == 61) {
        document.getElementById("resultado").innerHTML="BRASÍLIA";
        
    } else if (nDDD == 71) {
        document.getElementById("resultado").innerHTML="SALVADOR";
        
    } else if (nDDD == 11) {
        document.getElementById("resultado").innerHTML="SÃO PAULO";
        
    } else if (nDDD == 21) {
        document.getElementById("resultado").innerHTML="RIO DE JANEIRO";
        
    } else if (nDDD == 32) {
        document.getElementById("resultado").innerHTML="JUIZ DE FORA";
        
    } else if (nDDD == 19) {
        document.getElementById("resultado").innerHTML="CAMPINAS";
        
    } else if (nDDD == 27) {
        document.getElementById("resultado").innerHTML="VITORIA";
        
    } else if (nDDD == 31) {
        document.getElementById("resultado").innerHTML="BELO HORIZONTE";
    } else {
        document.getElementById("resultado").innerHTML = "INFORME UM DDD CORRETO.";
    }*/

    switch(nDDD) {
        case '61':
            document.getElementById("resultado").innerHTML="BRASÍLIA";
            break;
        case '71':
            document.getElementById("resultado").innerHTML="SALVADOR";
            break;
        case '11':
            document.getElementById("resultado").innerHTML="SÃO PAULO";
            break;
        case '21':
            document.getElementById("resultado").innerHTML="RIO DE JANEIRO";
            break;
        case '32':
            document.getElementById("resultado").innerHTML="JUIZ DE FORA";
            break;
        case '19':
            document.getElementById("resultado").innerHTML="CAMPINAS";
            break;
        case '27':
            document.getElementById("resultado").innerHTML="VITORIA";
            break;
        case '31':
            document.getElementById("resultado").innerHTML="BELO HORIZONTE";
            break;
        default:
            document.getElementById("resultado").innerHTML="DDD não encontrado";
            break;
    }
    

}