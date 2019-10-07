'use strict'
const GameTable = require('./src/GameTable')

const gameTable = new GameTable()

gameTable.newGame()
console.log(gameTable.thrownCards())
console.log(gameTable.drawPile())
console.log(gameTable.cardsOnHand())

/* createPlayers {name: 'Player1', stopScore: 14}

*/

/* const Deck = require('./src/Deck')
const Dealer = require('./src/Dealer')

const deck = new Deck()
const dealer = new Dealer(13)

const newDeck = deck.createDeck()
const shuffledDeck = dealer.shuffleCards(newDeck)
const newCard = dealer.drawCard(shuffledDeck) */

/* console.log(newCard) */
/* const shuffleCards = deck.toString()

console.log(shuffleCards) */
