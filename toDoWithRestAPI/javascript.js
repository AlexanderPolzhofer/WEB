function clickOnTodoButton() {
    document.getElementById("loadingTodos").addEventListener("click", function () {
        loadingTodos();
    })
}

function clickOnUserButton() {
    document.getElementById("loadingUsers").addEventListener("click", function () {
        loadinUsers();
    })
}

function loadingTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let html = "";
            data.forEach(element => {
                html += "<li>" + element.title + "</li>";
            });
            document.getElementById("list").innerHTML = html;
        })
        .catch(function (err) {
            console.log(err);
        });
}

function loadinUsers() {
    fetch('https://jsonplaceholder.typicode.com/users/')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let html = "";
            data.forEach(element => {
                html += "<li>" + element.name + "</li>";
            });
            document.getElementById("list").innerHTML = html;
        })
        .catch(function (err) {
            console.log(err);
        });
}

clickOnTodoButton();
clickOnUserButton();