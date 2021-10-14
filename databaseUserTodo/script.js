var urlGetTodos = "http://localhost:8080/get/todos";
var urlPostTodo = "http://localhost:8080/post/todos";
var urlDeleteTodo = "http://localhost:8080/delete/todos/";
var urlPutTodo = "http://localhost:8080/put/todos/";

function loadTodos() {
    fetch(urlGetTodos)
        .then(response => response.json())
        .then(function (data) {
            let html = "";
            let listNumber = 1;
            data.forEach(element => {
                html += "<div class='row gx-5'><div class='col'><div  class='p-3 border bg-light'>" + listNumber + ". " + "<div id='" + element.id + "' data-edit='true'>" + element.name + "</div>" + "<img id='" + element.id + "' data-deleteable='true' src='https://img.icons8.com/material-outlined/24/000000/delete-sign.png'/></div></div></div>";
                listNumber++;
            });
            document.getElementById("todolist").innerHTML = html;
            registerClickableItems();
        })
        .catch(error => {
            alert('Error:' + error);
        });
}

function clickOnSubmitTodoButton() {
    document.getElementById("save-button").addEventListener("click", function () {
        saveTodo();
    })
}

function saveTodo() {

    let todo = { "name": document.getElementById("text-input").value };

    fetch(urlPostTodo, {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(function (data) {
            loadTodos();
        })
        .catch(error => {
            alert('Error:' + error);
        });
}

function onClickRefresh() {
    document.getElementById("refresh-button").addEventListener("click", function () {
        location.reload();
    })
}

loadTodos();
clickOnSubmitTodoButton();
onClickRefresh();

function registerClickableItems() {
    let elements = document.querySelectorAll('[data-deleteable="true"]');

    elements.forEach(element => {

        element.addEventListener("click", function () {
            let id = this.id;
            deleteItem(id);
        })
    });

    elements = document.querySelectorAll('[data-edit="true"]');
    elements.forEach(element => {

        element.addEventListener("click", function () {
            if (this.attributes["data-edit"].nodeValue == "false") {
                return;
            }
            let id = this.id;
            this.attributes["data-edit"].nodeValue = false;
            let value = this.innerHTML;
            this.innerHTML = "<input id='data-id' type='text' onBlur='updateItem(" + id + ",   this.value)' value='" + value + "'/>";
        })
    });
}


function updateItem(id, text) {
    /*

    let todo = { "id": id, "name": text };

    fetch(urlPutTodo, {
        method: "PUT",
        body: JSON.stringify(todo),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(function (data) {
            loadTodos();
        })
        .catch(error => {
            alert('Error:' + error);
        });
        */
       myFetch({"id":id,"name":text},urlPutTodo,"PUT")
}

function myFetch(mJson, mUrl, mMethode){

    fetch(mUrl, {
        method: mMethode,
        body: JSON.stringify(mJson),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(function (data) {
            loadTodos();
        })
        .catch(error => {
            alert('Error:' + error);
        });
}

function deleteItem(id) {

    myFetch("{}",urlDeleteTodo+id,"DELETE");

/*    fetch(urlDeleteTodo + id, {
        method: "DELETE"
    })
        .then(function (data) {
            loadTodos();
        })
        .catch(error => {
            alert('Error:' + error);
        });
*/
    }
