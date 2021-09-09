let firstCard = 5;
let secondCard = 6;

let sum = firstCard + secondCard;

if (sum < 21) {
    console.log("Do you want a new card?")
} else if (sum === 21) {
    console.log("Whooohohoho .. you've got blackJack!")
} else {
    console.log("You're out of the game!")
}