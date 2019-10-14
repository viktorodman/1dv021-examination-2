'use strict'
const Deck = require('./Deck')
const Dealer = require('./Dealer')
// const Player = require('./Player')
const Participants = require('./Participants')
const ThrowPile = require('./ThrowPile')

class GameTable {
  constructor (numberOfPlayers, playerStopScore) {
    this.dealer = undefined
    this.currentPlayer = undefined
    this.deck = new Deck()
    this.throwPile = new ThrowPile()
    this.participants = new Participants(numberOfPlayers, playerStopScore)
    this.winner = undefined
  }

  startGame () {
    this.participants.addPlayers()
    this.deck.createDeck()
    this.dealer = new Dealer(14)
    this.deck.shuffleCards()
    this.firstRound()
    return this.playAgainstDealer()
  }

  playAgainstDealer () {
    for (let i = 0; i < this.participants.players.length; i++) {
      this.currentPlayer = this.participants.players[i]
      this.getCards(this.currentPlayer)

      if (!this.checkWin(this.currentPlayer, this.dealer)) {
        this.getCards(this.dealer)

        if (!this.checkWin(this.dealer, this.currentPlayer)) {
          this.compare()
        }
      }
      this.logWinners()
      // this.throwCards()
      this.throwPile.addThrownCard(this.currentPlayer.throwCards(), this.dealer.throwCards())
      this.dealer.score = 0
    }

    console.log(this.throwPile.thrownCards.length)
    console.log(this.deck.newDeck.length)
  }

  checkWin (p1, p2) {
    let endGame = false
    if (p1.checkWin()) {
      endGame = true
      this.winner = p1
    } else if (p1.checkLose()) {
      endGame = true
      this.winner = p2
    }
    return endGame
  }

  compare () {
    if (this.currentPlayer.score === this.dealer.score) {
      this.winner = this.dealer
    } else if (this.currentPlayer.score < this.dealer.score) {
      this.winner = this.dealer
    } else {
      this.winner = this.currentPlayer
    }
  }

  firstRound () {
    this.participants.players.forEach((player) => {
      player.requestCard(this.deck.dealCard())
    })
  }

  getCards (participant) {
    do {
      if (this.deck.cardsRemaining() > 1) {
        participant.requestCard(this.deck.dealCard())
      } else {
        console.log('Cards remaining: ' + this.deck.cardsRemaining() + '. Moving cards from throwPile to deck')
        this.deck.addThrownCards(this.throwPile.moveCardsTodeck())
        participant.requestCard(this.deck.dealCard())
      }
    }
    while (!participant.isDone())
  }

  cardsToString (hand) {
    let cards = ''
    hand.forEach(function (card) {
      cards += `${card.rank}${card.suit} `
    })
    return cards
  }

  logWinners () {
    console.log('----------------------------\n')
    console.log(`${this.currentPlayer.name}: ${this.cardsToString(this.currentPlayer.cardsOnHand)} (${this.currentPlayer.score})\n`)
    if (this.dealer.cardsOnHand.length === 0) {
      console.log(`${this.dealer.name}   : -      \n`)
    } else {
      console.log(`${this.dealer.name}   : ${this.cardsToString(this.dealer.cardsOnHand)} (${this.dealer.score})\n`)
    }

    console.log(`\t${this.winner.name}: Wins!    \n`)
    console.log('----------------------------\n')
  }
}

module.exports = GameTable
