var numTarefa = 0;

function recuperartudo(){
    fetch("http://www.professorisidro.com.br/tarefas.php", {"method":"GET"})
       .then(response => response.json())
       .then(json => geraTodas(json));
}

function geraTodas(json){
    console.log("tudao = "+JSON.stringify(json));
    for (i=0; i<json.length; i++) {
        let tarefa = json[i];
        console.log("tarefa = "+tarefa);
        criarTarefa(tarefa.nome);
    }
}

function criarTarefa(texto){
    numTarefa++;
    //var textoTarefa = document.getElementById("tarefa").value;
    var tarefaDOM = document.createElement("div");
    tarefaDOM.setAttribute("id","t"+numTarefa);
    tarefaDOM.setAttribute("draggable","true");
    tarefaDOM.setAttribute("class","itemTarefa");
    tarefaDOM.setAttribute("ondragstart","pegaItem(event);");
    tarefaDOM.innerHTML = texto;
    
    document.getElementById("pendentes").appendChild(tarefaDOM);
    console.log(numTarefa.length);

}

function pegaItem(evt){
    console.log("comecei a arrastar "+evt.target.id);
    // adicionei o id do item que vou arrastar na estrutura dataTransfer
    evt.dataTransfer.setData("TAREFA",evt.target.id);
}

function habilitaArrastar(evt){
    evt.preventDefault();
    //console.log("Estou sobre um determinado ponto que vai receber a tarefa");
}

function recebeItem(evt){
    // agora preciso recuperar a TAREFA que estava no dataTransfer e adicioná-la na coluna
    var idTarefa = evt.dataTransfer.getData("TAREFA");
    var tarefa = document.getElementById(idTarefa);
    console.log("Dropei a tarefa aqui ="+evt.target.id);


    //if (evt.target.id === "pendentes" ||
    //    evt.target.id === "feitas"    ||
    //    evt.target.id === "fazendo"     ){
       evt.target.appendChild(tarefa);
    //    }
   // else{
    //    alert("nesta versao nao aninhamos tarefas...")
   // }
  

    

}