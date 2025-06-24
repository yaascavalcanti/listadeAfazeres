// definir constantes para uso no código
const btnAdd = document.getElementById('btn-add');
const tarefa = document.getElementById('tarefa');
const taskList = document.getElementById('taskList');
const titulo = document.getElementById('titulo');

let nome = prompt("Qual o seu nome?")
tarefa.focus()
titulo.innerHTML = `Lista de tarefa: ${nome}`;

// acompanha o evento de clque do botão adicionar tarefa
btnAdd.addEventListener("click",criaTarefa);

// Envio com enter 
tarefa.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') criaTarefa();
});

function criaTarefa(){
    if(tarefa.value==""){
        alert("digite o nome da sua tarefa")
    } else{
    const listItem = document.createElement('li');
    listItem.textContent = tarefa.value;
    taskList.appendChild(listItem);

    // criar botão de deletar tarefa
    const removeButton = document.createElement('button');
    removeButton.id = "remove";
    removeButton.textContent = "x"
    /*listItem.appendChild(removeButton);*/

    removeButton.addEventListener("click", function(){
        taskList.removeChild(listItem);
    })
    // criar botãoo de concluir tarefa
    const concluirButton = document.createElement('button');
    concluirButton.id = "conclui";
    concluirButton.textContent = "✓";
    /*listItem.appendChild(concluirButton);*/

    let buttonsItem = document.createElement('div');
    buttonsItem.classList.toggle('buttonItem');
    listItem.appendChild(buttonsItem);
    buttonsItem.appendChild(concluirButton);
    buttonsItem.appendChild(removeButton);
    concluirButton.addEventListener("click", function(){
        listItem.classList.toggle('completed');
    })

    // apaga input após envio
    tarefa.value = '';
    tarefa.focus(); //retorna o foco para o campo de entregada
    }
}