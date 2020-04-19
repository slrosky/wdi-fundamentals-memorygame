const cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
const cardOne = cards[0];
cardsInPlay.push(cardOne);
const cardTwo = cards[1];
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

//if (cardsInPlay.length === 2) {console.log("You've played two cards");}

if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}

//const cardsInPlay = cardsInPlay[0] === cardsInPlay[2] ? alert("You found a match!") : alert("Sorry, try again.");