/**
 * Starting point of the application
 *
 * @author Viktor Ödman
 * @version 1.1.0
 */

'use strict'

const GameTable = require('./src/GameTable')

// Enter number of players
const numberOfPlayers = 30
// Enter the dealers stop value
const dealerStopValue = 15

try {
  const gameTable = new GameTable(numberOfPlayers, dealerStopValue)
  gameTable.startGame()
} catch (e) {
  console.error(e.message)
}
