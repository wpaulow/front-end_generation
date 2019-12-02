var id = 1;

function checar (id) {
    
    var txt = document.getElementById("txt").value;
    // Get the checkbox
    var checkBox = document.getElementById("task"+id);
    // Get the output text
    //var text = document.getElementById("text");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      //checkBox.style.textDecoration = "overline";
      txt.style.textDecoration = "line-through";
    } else {
      checkBox.style.display = "none";
    }
}


function addTarefa () {

    var txt = document.getElementById("txt").value;

    //var btn = document.getElementById("btnCad");
        
    document.getElementById("resultado").innerHTML += "<div class='row'><div class='col-md-12'><div class='form-check'><input type='checkbox' class='form-check-input' id='task"+ id +"' onclick='checar()'><label class='form-check-label' for='exampleCheck1'>" + txt + "</label></div></div></div>";

    id++;

}
