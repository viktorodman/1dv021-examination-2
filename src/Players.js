/**
 * Module for Players
 *
 * @module src/Players
 * @author Viktor Ödman
 * @version 1.0.0
*/

'use strict'

const Player = require('./Player')

/**
 *  Represents the Players
 *
 */
function Players () {
  this.numberOfPlayers = undefined
  this.players = []
  this.minStopValue = 13
  this.maxStopValue = 19
}

Players.prototype.setNumberOfPlayers = function (numberOfPlayers) {
  if (numberOfPlayers < 1 || numberOfPlayers > 30) {
    throw new Error('Wrong number of players: Number of players must be between 1-30 Players')
  } if (isNaN(numberOfPlayers)) {
    throw new Error('Number of players must be a number')
  }
  this.numberOfPlayers = numberOfPlayers
}

Players.prototype.getNumberOfPlayers = function () {
  return this.numberOfPlayers
}

/**
 * Adds new players
 * @memberof Players
 */
Players.prototype.addPlayers = function () {
  for (let i = 1; i <= this.getNumberOfPlayers(); i++) {
    this.players.push(new Player(`Player #${i}`))
  }
  this.setStopScores()
}

Players.prototype.setStopScores = function () {
  this.players.forEach((player) => {
    player.setStopScore(this.generateStopValue())
  })
}
/**
 * Generates Stop Values
 * https://www.w3schools.com/js/js_random.asp
 * @returns {number} returns a stop value
 * @memberof Players
 */
Players.prototype.generateStopValue = function () {
  return Math.floor(Math.random() * (this.maxStopValue - this.minStopValue + 1)) + this.minStopValue
}

/**
 * Returns the players
 *
 * @returns {Player[]} Returns the players
 * @memberof Players
 */
Players.prototype.getPlayers = function () {
  return this.players
}

module.exports = Players
