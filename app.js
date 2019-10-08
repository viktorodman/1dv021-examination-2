'use strict'
const GameTable = require('./src/GameTable')
const Participants = require('./src/Participants')
// Number of players and stopValues
const participants = new Participants(3, [3, 5, 7])

const gameTable = new GameTable(participants.addParticipants())

gameTable.newGame()
/* gameTable.dealer.shuffleCards() */
console.log(gameTable.drawPile())
console.log(gameTable.cardsOnHand())
console.log(gameTable.showParticipants())

/* console.log(participants.addParticipants()) */
