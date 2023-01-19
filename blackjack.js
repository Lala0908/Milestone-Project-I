//JS
// house vs player (2 player game)
// win, lose, draw

// create a deck (deck contains 52 cards)(13 cards per suit)
let suits = ['spades', 'diamonds', 'clubs', 'hearts']
let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", 'Q', "K", "A"]
let deck = [];

//create a function that goes through each value and for each value, creats 4 cards, one for each suit. 
function createDeck() {


     deck = [] //assigning an empty value
    //iterating through the values array
    for (let i = 0; i < values.length; i++) {

        //console.log(values[i])

        // iterating through the suits array
        for (let s = 0; s < suits.length; s++) {

            //console.log(suits[s])
            // turning values from array into numbers(integers)
            let weight = parseInt(values[i]);
            //console.log(weight)
            if (values[i] === "J" || values[i] === "Q" || values[i] === "K") {
                weight = 10;
            }
            else if (values[i] === "A"){
                weight = 11;
            }
            //console.log(weight)
            //create an object that stores suits, values, and weight
            let card = {Value: values[i], Suits: suits[s], Weight: weight};
            deck.push(card);
        }
    }
}
createDeck()
//console.log(deck)

// suffle deck (randomly choose 2 cards [2 for each player]) - googled shuffled items in an array (used The Fisher-Yates algorith - one of the options that was a bit simpler and i understood better).
function shuffle (array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  shuffle (deck)
  //console.log(deck)

// select a card (random)
// player is dealt 2 cards (at random)
// house is dealt 2 cards (at random)
// hide one of dealers cards
// house goes over 21 = house loses
// player goes over 21 = player loses
// player or house gets to 21 = wins
// both players get to 21 = draw
// player hold higer cards than house = player wins (even if less than 21)
// house holds higher cards than player = house wins (even if less than 21)



//HTML
//deck
// house cards
// player cards
//add buttons for more cards (hit me or stay)
//keep player's score