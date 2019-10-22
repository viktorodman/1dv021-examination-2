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
 * @param {number} numberOfPlayers The amount of players participating
 */
function Players (numberOfPlayers) {
  this.numberOfPlayers = numberOfPlayers
  this.players = []
  this.minStopValue = 13
  this.maxStopValue = 19
}

Object.defineProperty(Players.prototype, 'numberOfPlayers', {
  get: function () {
    return this._numberOfPlayers
  },
  set: function (value) {
    if (value < 1 || value >= 30) {
      throw new Error('Wrong number of players: Number of players must be between 1-30 Players')
    } if (isNaN(value)) {
      throw new Error('Number of players must be a number')
    }
    this._numberOfPlayers = value
  }
})

/**
 * Adds new players
 * @memberof Players
 */
Players.prototype.addPlayers = function () {
  for (let i = 1; i <= this.numberOfPlayers; i++) {
    this.players.push(new Player(`Player #${i}`, this.generateStopValue()))
  }
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
 * Generates Stop Values
 * https://www.w3schools.com/js/js_random.asp
 * @returns {Player[]} returns a stop value
 * @memberof Players
 */
Players.prototype.getPlayers = function () {
  return this.players
}

module.exports = Players
