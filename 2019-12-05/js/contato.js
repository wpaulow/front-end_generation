function validar() {

    var nome = document.getElementById("nome").value;
    //var sobNome = document.getElementById("sobNome").value;
    vNome = false;
    vSobNome = true;

    if (nome == null || nome.length < 3) {
        document.getElementById("resultado").innerHTML += "informe um nome mais de 3 caracteres";
        vNome = false;
    } else {
        vNome = true;
    }

    if (sobNome == null || sobNome.length < 3) {
        document.getElementById("resultado").innerHTML += "informe um sobrenome mais de 3 caracteres";
        vSobNome = false;
    } else {
        vSobNome = true;
    }

    if(vNome == true && vSobNome == true) {
        alert("foi!");
    } else {
        alert("não foi!");
    }
}



function tecla(){
    evt = window.event;
    var tecla = evt.keyCode;

    if(tecla > 47 && tecla < 58){ 
      alert('Não pressione teclas númericas');
      evt.preventDefault();
    }
  }