'use strict'
const GameTable = require('./src/GameTable')
const numberOfPlayers = 49

/* const dealerStopValue = 13 */

const gameTable = new GameTable(numberOfPlayers)
gameTable.startGame()
