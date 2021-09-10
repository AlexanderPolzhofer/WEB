let firstCard = 5;
let secondCard = 8;
let sum = firstCard + secondCard;
let message = "";

let hasBlackJack = false;
let isAlive = true;
let messageEl = document.getElementById("message-el");

function clickOnButton() {
    document.getElementById("button").addEventListener("click", function () {
        startGame();
    })
}

function startGame() {
    if (sum <= 20) {
        message = "Do you want a new card?"
    } else if (sum === 21) {
        message = "Whooohohoho .. you've got blackJack!"
        hasBlackJack = true;
    } else {
        message = "You're out of the game!"
        isAlive = false;
    }
    messageEl.textContent=message;
}

clickOnButton();