function linha(){
    document.write("<br>");
}

var salMin = prompt("Digite o valor do salário mínimo: ");

var qtdKw = prompt("Digite a quantidade de kw: ");

var valKw = (salMin / 7) / 100

document.write("Valor de 1kw 7 100 é R$ " + valKw )
linha();

document.write("Valor total da conta é R$ " + valKw * qtdKw)
linha();

document.write("Valor total com 10% de desconto: " + (valKw * qtdKw) * 0.9)

