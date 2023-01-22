//JS

// create a deck (deck contains 52 cards)(13 cards per suit)
let suits = ["Spades", "Diamonds", "Clubs", "Hearts"];
let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let deck = [];

//create a function that goes through each value and for each value, creates 4 cards, one for each suit.
function createDeck() {
  deck = []; //assigning an empty value
  //iterating through the values array
  for (let i = 0; i < values.length; i++) {
    //console.log(values[i])

    // iterating through the suits array
    for (let s = 0; s < suits.length; s++) {
      //console.log(suits[s])
      // turning values from array into numbers(integers)- w3 school (parseInt)
      let weight = parseInt(values[i]);
      //console.log(weight)
      if (values[i] === "J" || values[i] === "Q" || values[i] === "K") {
        weight = 10;
      } else if (values[i] === "A") {
        weight = 11;
      }
      //console.log(weight)
      //create an object that stores suits, values, and weight
      let card = { Value: values[i], Suits: suits[s], Weight: weight };
      deck.push(card);
    }
  }
}
// createDeck()
// //console.log(deck)

// // suffle deck (randomly choose 2 cards [2 for each player]) - googled shuffled items in an array (used The Fisher-Yates algorith - one of the options that was a bit simpler and i understood better).
function shuffleDeck() {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
}
//   //console.log(deck)

// house vs player (2 player game) - create players

let players = [];
function createPlayers() {
  const player1 = { Name: "dealer", Points: 0, Hand: [] }; //object
  players.push(player1);

  const player2 = { Name: "you", Point: 0, Hand: [] };
  players.push(player2);
}
// // select a card (random)
// // player is dealt 2 cards (at random)
// // house is dealt 2 cards (at random)

function dealHands() {
  const card1 = deck.pop();
  const card2 = deck.pop();
  const card3 = deck.pop();
  const card4 = deck.pop();

  players[0].Hand.push(card1);
  players[1].Hand.push(card2);
  players[0].Hand.push(card3);
  players[1].Hand.push(card4);
}

//https://www.geeksforgeeks.org/how-to-create-an-image-element-dynamically-using-javascript/

function renderCards() {
  let img = document.createElement("img");
  img.src = `./Cards/BACK.png`;
  console.log(img.src);
  document.getElementById("dealer-cards").appendChild(img);

  img = document.createElement("img");
  value = players[0].Hand[1].Value;
  suits = players[0].Hand[1].Suits;
  img.src = `./Cards/${value}-${suits}.png`;
  console.log(img.src);
  document.getElementById("dealer-cards").appendChild(img);

  img = document.createElement("img");
  value = players[1].Hand[0].Value;
  suits = players[1].Hand[0].Suits;
  img.src = `./Cards/${value}-${suits}.png`;
  console.log(img.src);
  document.getElementById("your-cards").appendChild(img);

  img = document.createElement("img");
  value = players[1].Hand[1].Value;
  suits = players[1].Hand[1].Suits;
  img.src = `./Cards/${value}-${suits}.png`;
  console.log(img.src);
  document.getElementById("your-cards").appendChild(img);
}
//https://www.w3schools.com/jsref/met_document_createelement.asp

function renderPoints() {
  let para = document.createElement("p");
  let points = players[0].Hand[1].Weight;
  para.innerHTML = `Points:${points}`;
  document.getElementById("dealer-div").appendChild(para);

  para = document.createElement("p");
  points = players[1].Hand[0].Weight + players[1].Hand[1].Weight;
  para.innerHTML = `Points:${points}`;
  document.getElementById("your-div").appendChild(para);
}

function hit() {
  const card5 = deck.pop();
  players[1].Hand.push(card5);
  let img = document.createElement("img");
  let value = players[1].Hand[2].Value;
  let suits = players[1].Hand[2].Suits;
  img.src = `./Cards/${value}-${suits}.png`;
  console.log(img.src);
  document.getElementById("your-cards").appendChild(img);
}

function newGame() {
  createDeck();
  shuffleDeck();
  createPlayers();
  dealHands();
  renderCards();
  document.getElementById("new-game").disabled = true;
  renderPoints();
  
}

// //Fetching the new-game button to JS
let newGameButton = document.getElementById("new-game");
newGameButton.addEventListener("click", newGame);

//Fetching the hit button to JS
let hitGameButton = document.getElementById("hit");
hitGameButton.addEventListener("click", hit);

// // hide one of dealers cards
// // house goes over 21 = house loses
// // player goes over 21 = player loses
// // player or house gets to 21 = wins
// // both players get to 21 = draw
// // player hold higer cards than house = player wins (even if less than 21)
// // house holds higher cards than player = house wins (even if less than 21)
// // win, lose, draw

// //HTML
// //deck
// // house cards
// // player cards
// //add buttons for more cards (hit me or stay)
// //keep player's score
