var urlTodos = "http://localhost:8080/get/todos";

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

loadTodos();