'use strict'
const Deck = require('./Deck')
const Dealer = require('./Dealer')
const Player = require('./Player')

class GameTable {
  constructor (numberOfPlayers) {
    this.numberOfPlayers = numberOfPlayers
    this.dealer = new Dealer()
    this.player = new Player()
    this.deck = new Deck()
    /* this.deck = new Deck() */
  }

  addParticipants () {
    const players = []
    players.push(new Dealer(14))
    for (let i = 1; i <= this.numberOfPlayers; i++) {
      players.push(new Player(`Player ${i}`, 15))
    }
    return players
  }

  startGame () {
    return this.deck
  }

  playAgainstDealer () {

  }
}

module.exports = GameTable
