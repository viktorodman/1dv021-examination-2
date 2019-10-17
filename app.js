/**
 * Starting point of the application
 *
 * @author Viktor Ödman
 * @version 1.0.0
 */

'use strict'

const GameTable = require('./src/GameTable')

const numberOfPlayers = 13
const dealerStopValue = 15

const gameTable = new GameTable(numberOfPlayers, dealerStopValue)
gameTable.startGame()
