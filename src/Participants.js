'use strict'
const Player = require('./Player')
function Participants (numberOfPlayers, stopScore) {
  this.numberOfPlayers = numberOfPlayers
  this.stopScore = stopScore
  this.players = []
}

Participants.prototype.addPlayers = function () {
  for (let i = 1; i <= this.numberOfPlayers; i++) {
    this.players.push(new Player(`Player #${i}`, this.stopScore))
  }
}

module.exports = Participants
