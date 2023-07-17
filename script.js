function showData(){
    let flysList;
    if(localStorage.getItem("flysList")=== null){
        flysList = []
    } else {
        flysList = JSON.parse(localStorage.getItem("flysList"))
    }
    let html = "";
    flysList.forEach((fly, index) => {
        html += `<li>${fly.destino}${fly.vuelo}<button onclick="editData(${index})">Editar</button><button onclick="deleteData(${index})">Eliminar</button></li>`
    });
    document.querySelector('ul').innerHTML = html;
}

document.onload = showData()

function addData(event){
    event.preventDefault();
    let destino = document.querySelector('#destino').value;
    let vuelo = document.querySelector('#vuelo').value;

    if (destino === "" || vuelo === "") return;

    let flysList;
    if(localStorage.getItem("flysList")=== null){
        flysList = []
    } else {
        flysList = JSON.parse(localStorage.getItem("flysList"))
    } 
    flysList.push({vuelo, destino})
    localStorage.setItem("flysList", JSON.stringify(flysList))
    showData()

    document.querySelector('#destino').value = "";
    document.querySelector('#vuelo').value = "";
}

function editData(index){
    document.getElementById('add-btn').style.display = 'none';
    document.getElementById('edit-btn').style.display = 'block';

    let flysList;
    if(localStorage.getItem("flysList")=== null){
        flysList = []
    } else {
        flysList = JSON.parse(localStorage.getItem("flysList"))
    }
    document.querySelector('#destino').value = flysList[index].destino;
    document.querySelector('#vuelo').value = flysList[index].vuelo;

    document.getElementById('edit-btn').onclick = function (){
        flysList[index].destino = document.querySelector('#destino').value;
        flysList[index].vuelo = document.querySelector('#vuelo').value;

        localStorage.setItem("flysList", JSON.stringify(flysList));
        showData();
        document.querySelector('#destino').value = "";
        document.querySelector('#vuelo').value = "";
        
        document.getElementById('add-btn').style.display = 'block';
        document.getElementById('edit-btn').style.display = 'none'; 
    }
}

function deleteData(index) {
    let flysList = JSON.parse(localStorage.getItem("flysList"));
    flysList.splice(index, 1);
    localStorage.setItem("flysList", JSON.stringify(flysList));
    showData();
}

