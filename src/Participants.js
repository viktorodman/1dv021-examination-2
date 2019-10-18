/**
 * Module for Participants
 *
 * @module src/Participants
 * @author Viktor Ödman
 * @version 1.0.0
*/

'use strict'

const Player = require('./Player')

/**
 *  Represents the Participants
 *
 * @param {number} numberOfPlayers The amount of players participating
 */
function Participants (numberOfPlayers) {
  this.numberOfPlayers = numberOfPlayers
  this.players = []
}

/**
 * Adds new players
 * @memberof Participants
 */
Participants.prototype.addPlayers = function () {
  for (let i = 1; i <= this.numberOfPlayers; i++) {
    this.players.push(new Player(`Player #${i}`, this.generateStopValue()))
  }
}
/**
 * Generates Stop Values
 * https://www.w3schools.com/js/js_random.asp
 * @returns {number} returns a stop value
 * @memberof Participants
 */
Participants.prototype.generateStopValue = function () {
  const min = 13
  const max = 19
  return Math.floor(Math.random() * (max - min + 1)) + min
}

module.exports = Participants