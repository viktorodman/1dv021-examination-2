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
 * @param {number} stopScore The stop score for the players
 */
function Participants (numberOfPlayers, stopScore) {
  this.numberOfPlayers = numberOfPlayers
  this.stopScore = stopScore
  this.players = []
}

/**
 * Adds players to this.players
 */
Participants.prototype.addPlayers = function () {
  for (let i = 1; i <= this.numberOfPlayers; i++) {
    this.players.push(new Player(`Player #${i}`, this.stopScore))
  }
}

module.exports = Participants
