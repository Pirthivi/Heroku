var DATA = []; //Data Sources
var Request = new XMLHttpRequest();
load();


function addTodo(){
    var input = document.getElementById('textField').value;
    DATA.push(input);
    document.getElementById('textField').value = '';
    render();
}

function render(){
    document.getElementById('container').innerHTML = '';
    for(var i in DATA){
        document.getElementById('container').innerHTML += "<div id="+i+"><input type='checkbox' onclick='remove(this.parentNode.id)' /><label>" + DATA[i] + "</label><button onclick='edit(this.parentNode.id)'>Edit</button></div>";
    }
    save(); 
}

function save(){
    Request.open("POST","https://nodedatastore.herokuapp.com/mernstack");
    Request.setRequestHeader("content-type","application/json");
    Request.send(JSON.stringify(DATA));
    Request.onload = function(){
        alert("Data sent to server");
    }
}

function load(){
    Request.open("GET","https://nodedatastore.herokuapp.com/mernstack");
    Request.send();
    Request.onload = function(){
        DATA = JSON.parse(Request.responseText);
        render();
    }
}

function edit(Id){
    var editText = prompt("Edit new item");
    DATA[Id] = editText;
    render();
}

function remove(Id){
    //Remove item from Array
    DATA.splice(Id,1);
    render();
}  