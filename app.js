/**
 * Starting point of the application
 *
 * @author Viktor Ödman
 * @version 1.0.0
 */

'use strict'

const GameTable = require('./src/GameTable')

const numberOfPlayers = 5
const dealerStopValue = 14
try {
  const gameTable = new GameTable(numberOfPlayers, dealerStopValue)
  gameTable.startGame()
} catch (e) {
  console.error(e.message)
}
/* const gameTable = new GameTable(numberOfPlayers, dealerStopValue) */
