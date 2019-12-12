/*

function validarNome() {
 
    var nome = document.getElementById("nome").value;
    var sobNome = document.getElementById("sobNome").value;
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
    validarTelefone();
}
  




function validarTelefone()
{
    var telefone = document.getElementById("num").value;
    console.log("Telefone digitado: " + telefone);

    if(telefone == null)
    {
        alert("Telefone inválido");
    }
    
    if(telefone.length > 10) //se a quantidade de caracteres for maior do que 10, telefone inválido
    {
        alert("Telefone inválido");
    }
    
    checarEmail();
}

function checarEmail()
{
    let email = document.getElementById("email").value;

    if( email =="" || email.indexOf('@') == -1 || email.indexOf('.')==-1 )
        {
          alert( "Por favor, informe um E-MAIL válido!" );
          //return false;
        }
        alert("E-mail enviado com sucesso");
        //return true;
        
        caixaTexto();
}
    

    function caixaTexto()
    {
        var input = document.getElementById("caixat");
        if((input.value == "") || (input.value == " "))
        {
             alert("Escreva algo.")
        }
        else 
        {
            alert("Mensagem enviada")
        }
    }
*/

function tecla(){
    evt = window.event;
    var tecla = evt.keyCode;
 
    if(tecla > 47 && tecla < 58){ 
      alert('Não pressione teclas númericas');
      evt.preventDefault();
    }

}

function validaForm(){
    var nome = document.getElementById("nome").value;
    var sobNome = document.getElementById("sobNome").value;
    let email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var msg = document.getElementById("caixat").value;
    var i = 0;


    if (nome == "" || nome.length < 3) {
        alert('Nome invalido')
        i++;
    }
        if (sobNome == "" || sobNome.length < 3){
            alert('Sobrenome invalido');
            i++;
        } 
            if ( email == "" || email.indexOf('@') == -1 || email.indexOf('.') == - 1 ){
                alert("E-mail invalido");
                i++;
            }
                if(telefone == "" || telefone.length < 9 || telefone.length > 9){
                    alert('Telefone invalido');
                    i++;
                }
                    if (msg == ""){
                        alert('Mensagem invalida')
                        i++;
                        
                    } 
                    else if (i >= 1){
                        alert('Mensagem não enviada')
                    } else {
                        alert('mensagem enviada');
                    }
}
