

function checar () {
    var chk = document.getElementsByClassName("form-check-input");

    if(chk.check) {
        console.log("foi");
    }
}



function addTarefa () {

    
    var txt = document.getElementById("txt").value;

    //var btn = document.getElementById("btnCad");
        
    document.getElementById("resultado").innerHTML += "<div class='row'><div class='col-md-12'><div class='form-check'><input type='checkbox' class='form-check-input' id='exampleCheck1' onclick='checar()' id=tarefa><label class='form-check-label' for='exampleCheck1'>" + txt + "</label></div></div></div>";

    /*return click;*/
}
