let cards = [];
let sum = 0;
let message = "";

let hasBlackJack = false;
let isAlive = false;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
    name: "Player",
    chips: 100
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $ " + player.chips;

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;

    if (randomNumber === 1) {
        randomNumber = 11;
    } else if (randomNumber > 10) {
        randomNumber = 10;
    }
    return randomNumber;
}

function clickOnStartGameButton() {
    document.getElementById("button-start-game").addEventListener("click", function () {
        startGame();
    })
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    };
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want a new card?"
    } else if (sum === 21) {
        message = "Whooohohoho .. you've got blackJack!"
        hasBlackJack = true;
    } else {
        message = "You're out of the game!"
        isAlive = false;
    }
    messageEl.textContent = message;
}

function startGame() {
    if (isAlive === false && sum <= 20) {
        isAlive = true;
        let firstCard = getRandomCard();
        cards.push(firstCard);
        sum += firstCard;
        renderGame();
    }
}

function clickOnNewCardButton() {
    document.getElementById("button-new-card").addEventListener("click", function () {
        newCard();
    })
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let nextCard = getRandomCard();
        sum += nextCard;
        cards.push(nextCard);
        renderGame();
    }
}


clickOnStartGameButton();
clickOnNewCardButton();