/**
 * Starting point of the application
 *
 * @author Viktor Ödman
 * @version 1.0.0
 */

'use strict'

const GameTable = require('./src/GameTable')

const numberOfPlayers = NaN
const dealerStopValue = 15
try {
  const gameTable = new GameTable(numberOfPlayers, dealerStopValue)
  gameTable.startGame()
} catch (e) {
  console.error(e.message)
}
/* const gameTable = new GameTable(numberOfPlayers, dealerStopValue) */
