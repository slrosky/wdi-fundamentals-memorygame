const cards = [
	{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
	},
	{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
	},
	{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
	},
	{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
	},
];


let cardsInPlay = [];

function checkForMatch() = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
};

function flipCard() {
	var cardId = this.getAttribute("data-id");
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute("src", cards[cardId].cardImage);
	if(cardsInPlay.length === 2) {
	
	checkForMatch();
	}
};

function createBoard () {
	for (let i = 0; i < cards.length; i++) {
		//cards will show their opposite image when clicked
	var cardId = this.getElementbyId("data-id");
	let cardElement = document.createElement("img");
	cardElement.setAttribute("src", "images/back.png");
	cardElement.setAttribute("data-id", i);
	cardElement.addEventListener("click", flipCard);
	document.getElementbyId("game-board").appendChild(cardElement);
	}
};

createBoard();

function newSet = function() {
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src', 'images/back.png');
	}

function resetBoard(){
    document.getElementById('game-board').innerHTML = "";
    createBoard();
    cardsInPlay = [];
    console.log(cardsInPlay);
};

