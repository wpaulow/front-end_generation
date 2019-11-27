var N = prompt("Por favor, digite um número Positivo");
var textoInterno="";
var linhaPadrao =""
//console.log("Valor lido do Usuario = "+N);
for (valor = 1; valor <= N; valor++){
  //  console.log("Valor = "+valor);
    if (valor % 2 == 0){



    //   console.log("Valor atendeu ao criterio de requisito");
       linhaPadrao = "<div class='row'><div class='col-sm-1'></div><div class='col-sm-2 numeroteste'>"+valor+"</div><div class='col-sm-6 resultadoteste'>"+valor+"^ 2 = "+(valor*valor)+"</div><div class='col-sm-2 checkteste'><span class='glyphicon glyphicon-ok'></span></div><div class='col-sm-1'></div></div>";

       

       textoInterno = textoInterno + linhaPadrao;


       //alert(valor + " ^ 2 = "+ (valor*valor));
       //console.log(valor + " ^ 2 = "+ (valor*valor));
       //document.write(valor + " ^ 2 = "+ (valor*valor)+"<br/>");
       //textoInterno = textoInterno + valor + " ^ 2 = "+ (valor*valor)+"<br/>"
    }
}

document.getElementById("resultado").innerHTML = textoInterno;