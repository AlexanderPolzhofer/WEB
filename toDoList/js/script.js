var tasks = [];

printTaskList();

document.getElementById("addTask").addEventListener("click", function () {
    addTask();
});

function addTask() {
    let taskName = document.getElementById("txtNewTask").value;
    let taskResponsible = document.getElementById("txtResponsible").value;
    let task = {
        name: taskName,
        responsible: taskResponsible,
        isDone: false
    };
    tasks.push(task);
    printTaskList();
}

function markTask(element) {
    let index = element.attributes['data-index'].value;
    let isChecked = element.checked;

    tasks[index].isDone = isChecked;
    printTaskList();
}

function printTaskList() {
    document.getElementById("taskList").innerHTML = getHTMLTasks();
}

function getHTMLTasks() {
    let html = "";
    let index = 0;

    tasks.forEach(element => {
        let checked = "";
        if (element.isDone) {
            checked = "checked";
        }
        html += "<li><input onClick ='markTask(this)' name ='checkbox' data-index='" + index + "' type='checkbox'" + checked + "/>" + element.name + " | " + element.responsible + "</li>";
        index++;
    });
    return html;
}
