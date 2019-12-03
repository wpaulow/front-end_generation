function realizarBusca () {

    var id = document.getElementById("usr").value;
        console.log("Digitei o usuário = "+ id);

    var URL = "https://jsonplaceholder.typicode.com/users/" + id;
        console.log("Montei a URL...");
        console.log(URL);
    
    fetch(URL, { method:"GET" })
        .then(response => response.json() )
        .then(json => preencheHTML(json));

    
}

function preencheHTML(json){
    /*var result = document.getElementById("result");
    result.innerHTML = JSON.stringify(json);
    result.innerHTML += "Id:" + json.id + "<br/>";
    result.innerHTML += "Name:" + json.name + "<br/>";
    result.innerHTML += "username: "+json.usermame+" -  email: "+json.email+"<br/>";
    result.innerHTML += "UF: "+json.uf+"<br/>";*/
 
    /*var sklDadosUsr = "<div class='row' id='linhaitem'> *coluna1* *coluna2* *coluna3* *coluna4* </div>";
    var sklCol1 = '<div class="col-md-2"><input type="textbox" id="*IDCHK*" ;"></div>';*/

    var result = document.getElementById("result");
    
    //preenchendo a linha de dados do usuário

    result.innerHTML += "<div class='row'><div class='col-sm-2'><h3>Informações básicas</3></div><div class='col-sm-1'>Id:" + json.id + "</div><div class='col-sm-3'> Name: " + json.name + "</div> <div class='col-sm-3'> Username: " + json.username + "</div><div class='col-sm-3'> e-mail: "+ json.email+"</div></div>";

    result.innerHTML += "<div class='row'><div class='col-sm-2'><h3>Endereço</3></div><div class='col-sm-4'>Logradouro: " + json.address.street + "</div><div class='col-sm-1'>" + json.address.suite + "</div><div class='col-sm-2'> cidade: "+ json.address.city+"</div><div class='col-sm-3'> zipcode: "+ json.address.zipcode +"</div></div>";
 }

 