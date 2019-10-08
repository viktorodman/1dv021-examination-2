'use strict'
const GameTable = require('./src/GameTable')
const Participants = require('./src/Participants')
// Number of players and stopValues
const numberOfPlayers = 5
const stopValues = [
  10, // Player 1
  14, // Player 2
  13, // Player 3
  11, // Player 4
  19 // Player 5
]

const participants = new Participants(numberOfPlayers, stopValues)

const gameTable = new GameTable(participants.addParticipants())

gameTable.newGame()
/* gameTable.dealer.shuffleCards() */
console.log(gameTable.drawPile())
console.log(gameTable.cardsOnHand())
console.log(gameTable.showParticipants())

/* console.log(participants.addParticipants()) */
