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
    this.participants = []
    /* this.deck = new Deck() */
  }

  startGame () {
    this.addParticipants()
    this.deck.shuffleCards()
    this.firstRound()
    return this.playAgainstDealer()
  }

  playAgainstDealer () {
    const results = ''
    for (let i = 1; i < this.participants.length; i++) {
      while (!this.participants[i].isDone()) {
        this.participants[i].requestCard(this.deck.dealCard())
      }
      this.checkWinner(this.participants[i])
    }
  }
  // return results

  addParticipants () {
    this.participants.push(new Dealer(14))
    for (let i = 1; i <= this.numberOfPlayers; i++) {
      this.participants.push(new Player(`Player ${i}`, 15))
    }
  }

  firstRound () {
    for (let i = 0; i < this.participants.length; i++) {
      if (this.participants[i].name !== 'Dealer') {
        this.participants[i].requestCard(this.deck.dealCard())
      }
    }
  }

  checkWinner (participant) {
    if (participant.score === 21) {
      console.log(participant)
      this.logWinners(participant.name)
    }
    if (participant.score < 21 && participant.cardsOnHand.length === 5) {
      console.log('YAAAAHOOOO!!!\n' + participant.name)
      this.logWinners(participant.name)
    }
    if (participant.score > 21) {
      console.log(participant)
      this.logWinners(this.participants[0].name)
    }
  }

  logWinners (winner) {
    console.log(`${winner} Wins !`)
  }
}

module.exports = GameTable
