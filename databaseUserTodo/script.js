var urlTodos = "http://localhost:8080/get/todos";
var urlInsertIntoTodos = "http://localhost:8080/post/todos";

function loadTodos() {
    fetch(urlTodos)
        .then(response => response.json())
        .then(function (data) {
            let html = "";
            let listNumber = 1;
            data.forEach(element => {
                html += "<div class='row gx-5'><div class='col'><div class='p-3 border bg-light'>" + listNumber + '. ' + element.name + "</div></div></div>";
                listNumber++;
            });
            document.getElementById("todolist").innerHTML = html;
        });
}

function clickOnSubmitTodoButton() {
    document.getElementById("save-button").addEventListener("click", function () {
        saveTodo();
    })
}

function saveTodo() {

    let todo = { "name": document.getElementById("text-input").value };

    fetch(urlInsertIntoTodos, {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(function (data) {
            loadTodos();
        });
}

function onClickRefresh(){
    document.getElementById("refresh-button").addEventListener("click", function(){
        location.reload();
    })
}

loadTodos();
clickOnSubmitTodoButton();
onClickRefresh();


/*
function deleteItem() {

    let itemNumber = document.getElementById("deleteItem").value;

    fetch("http://localhost:8080/delete/todos", {
        method: "DELETE"
    })
        .then(function (data) {
            loadTodos();
        });
}*/

