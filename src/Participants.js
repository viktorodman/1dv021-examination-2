'use strict'
const Dealer = require('./Dealer')
const Player = require('./Player')
class Participants {
  constructor (numberOfPlayers, playerStopScore, dealerStopScore) {
    this.numberOfPlayers = numberOfPlayers
    this.playerStopScore = playerStopScore
    this.dealerStopScore = dealerStopScore
  }

  addParticipants () {
    const participants = []
    const dealer = new Dealer(this.dealerStopScore)
    participants.push(dealer.createDealer())
    for (let i = 0; i < this.numberOfPlayers; i++) {
      const player = new Player(`Player ${i + 1}`, this.playerStopScore[i])
      participants.push(player.createPlayer())
    }
    return participants
  }
}

module.exports = Participants
