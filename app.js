'use strict'
const GameTable = require('./src/GameTable')
// const Participants = require('./src/Participants')
// Number of players and stopValues
const numberOfPlayers = 15
/* const playerStopValues = [
  10, // Player 1
  14, // Player 2
  13, // Player 3
  11, // Player 4
  19 // Player 5
]
const dealerStopValue = 13 */

// const participants = new Participants(numberOfPlayers, stopValues)

const playerStopScore = 15

const gameTable = new GameTable(numberOfPlayers, playerStopScore)
gameTable.startGame()
/* gameTable.startGame() */
// console.log(gameTable.startGame())
// console.log(gameTable.showParticipants())
/* gameTable.dealer.shuffleCards() */
/* console.log(gameTable.drawPile())
console.log(gameTable.cardsOnHand())
console.log(gameTable.showParticipants()) */

/* console.log(participants.addParticipants()) */
