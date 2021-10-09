var urlTodos = "http://localhost:8080/get/todos";
var urlInsertIntoTodos = "http://localhost:8080/post/todos";

function loadTodos() {
    fetch(urlTodos)
        .then(response => response.json())
        .then(function (data) {
            let html = "";
            data.forEach(element => {
                html += "<div class='row gx-5'><div class='col'><div class='p-3 border bg-light'>" + element.name + "</div></div></div>";
            });
            document.getElementById("todolist").innerHTML = html;
        });
}

document.getElementById("save-button").addEventListener("click", function () {
    saveTodo();
})


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

loadTodos();