var sklLinha = "<div class='row'> *coluna1*  *coluna2* *coluna3* </row>";
var sklCol1 = '<div class="col-md-2"><input type="checkbox" id="*IDCHK*" onclick="riscaItem(**ID**);"></div>';
var sklCol2 = '<div class="col-md-8" id="**ID**">*ITEM*</div>';
var sklCol3 = "<div class='col-md-2'>*NUM*</div>";
var numItem = 1;

function novoItem() {
    var item = document.getElementById("txtItem").value;
    document.getElementById("txtItem").value = "";
    var col1 = sklCol1.replace("**ID**", "'" + numItem + "'");
    col1 = col1.replace("*IDCHK*","chk"+numItem);
    var col2 = sklCol2.replace("*ITEM*", item);
    col2 = col2.replace("**ID**","item"+numItem+"");
    var col3 = sklCol3.replace("*NUM*", numItem);

    var novaLinha = sklLinha.replace("*coluna1*", col1);
    novaLinha = novaLinha.replace("*coluna2*", col2);
    novaLinha = novaLinha.replace("*coluna3*", col3);

    document.getElementById("listaItens").innerHTML += novaLinha;

    numItem++;
}

function riscaItem(idTexto){
    var idChk="chk"+idTexto;
    var idTxt="item"+idTexto;
    if (document.getElementById(idChk).checked){
       document.getElementById(idTxt).style="text-decoration: line-through;";
    }
    else{
        document.getElementById(idTxt).style="text-decoration: none;";
    }
    
}