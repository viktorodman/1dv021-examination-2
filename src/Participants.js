'use strict'

const Player = require('./Player')
class Participants {
  constructor (numberOfPlayers, stopScore) {
    this.numberOfPlayers = numberOfPlayers
    this.stopScore = stopScore
  }

  addParticipants () {
    const players = []
    for (let i = 0; i < this.numberOfPlayers; i++) {
      const player = new Player(`Player ${i + 1}`, this.stopScore[i])
      players.push(player.createPlayer())
    }
    return players
  }
}

module.exports = Participants
