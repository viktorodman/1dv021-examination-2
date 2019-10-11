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
    this.throwPile = []
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
      this.getCards(this.participants[i])
      if (!this.checkWinOrLose(this.participants[i], this.participants[0])) {
        this.getCards(this.participants[0])
        if (!this.checkWinOrLose(this.participants[0], this.participants[i])) {
          this.compare(this.participants[i], this.participants[0])
        }
      }
      this.throwCards(this.participants[i])
      this.throwCards(this.participants[0])
      this.participants[0].score = 0
    }
    console.log(this.throwPile.length)
    console.log(this.deck.newDeck.length)
  }

  // return results

  addParticipants () {
    this.participants.push(new Dealer(14))
    for (let i = 1; i <= this.numberOfPlayers; i++) {
      this.participants.push(new Player(`Player ${i}`, 15))
    }
  }

  compare (player, dealer) {
    if (player.score === dealer.score) {
      this.logWinners(dealer, player)
    } else if (player.score < dealer.score) {
      this.logWinners(dealer, player)
    } else {
      this.logWinners(player, dealer)
    }
  }

  firstRound () {
    for (let i = 0; i < this.participants.length; i++) {
      if (this.participants[i].name !== 'Dealer') {
        this.participants[i].requestCard(this.deck.dealCard())
      }
    }
  }

  getCards (participant) {
    while (!participant.isDone()) {
      participant.requestCard(this.deck.dealCard())
    }
  }

  checkWinOrLose (participant1, participant2) {
    let endGame = false
    if (participant1.checkWin()) {
      this.logWinners(participant1, participant2)
      endGame = true
    } else if (participant1.checkLose()) {
      this.logWinners(participant2, participant1)
      endGame = true
    }
    return endGame
  }

  throwCards (participant) {
    for (let i = 0; i < participant.cardsOnHand.length; i++) {
      this.throwPile.push(participant.throwToPile())
    }
  }

  logWinners (winner, loser) {
    console.log('--------------------------')
    console.log(`${winner.name} Wins ! Score: ${winner.score}`)
    console.log(winner.cardsOnHand)
    console.log(`${loser.name} Lose ! Score: ${loser.score}`)
    console.log(loser.cardsOnHand)
    console.log('--------------------------')
  }
}

module.exports = GameTable
