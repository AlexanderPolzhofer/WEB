var messages = [];

document.getElementById("button").addEventListener("click", function () {
    addMessage();
});

function getHTMLText() {
    let html = "";

    messages.forEach(element => {
        html += "<li>" + "Datum: " + element.date + " | Name: " + element.name + " | Nachricht: " + element.message + "</li>"

    });

    return html;
}

function printMessageList() {
    document.getElementById("messageList").innerHTML = getHTMLText();
}

function addMessage() {
    let taskDate = document.getElementById("taskDate").value;
    let taskName = document.getElementById("taskName").value;
    let taskMessage = document.getElementById("taskNachricht").value;

    let message = {
        date: taskDate,
        name: taskName,
        message: taskMessage
    };

    messages.push(message);

    printMessageList();
}
