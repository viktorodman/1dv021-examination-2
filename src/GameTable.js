'use strict'
const Deck = require('./Deck')
const Dealer = require('./Dealer')
const Player = require('./Player')

class GameTable {
  constructor (numberOfPlayers) {
    this.numberOfPlayers = numberOfPlayers
    this.dealer = undefined
    this.currentPlayer = undefined
    this.deck = new Deck()
    this.players = []
    this.throwPile = []
    this.winner = undefined
    /* this.deck = new Deck() */
  }

  startGame () {
    this.addPlayers()
    this.deck.createDeck()
    this.dealer = new Dealer(14)
    this.deck.shuffleCards()
    this.firstRound()
    return this.playAgainstDealer()
  }

  playAgainstDealer () {
    for (let i = 0; i < this.players.length; i++) {
      this.currentPlayer = this.players[i]
      this.getCards(this.currentPlayer)

      if (!this.checkWin(this.currentPlayer, this.dealer)) {
        this.getCards(this.dealer)

        if (!this.checkWin(this.dealer, this.currentPlayer)) {
          this.compare()
        }
      }
      this.logWinners()
      this.throwCards()
      this.dealer.score = 0
    }

    console.log(this.throwPile.length)
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

  addPlayers () {
    // this.participants.push(new Dealer(14))
    for (let i = 1; i <= this.numberOfPlayers; i++) {
      this.players.push(new Player(`Player #${i}`, 15))
    }
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
    this.players.forEach((player) => {
      player.requestCard(this.deck.dealCard())
    })
  }

  getCards (participant) {
    while (!participant.isDone()) {
      if (this.deck.cardsRemaining() > 1) {
        participant.requestCard(this.deck.dealCard())
      } else {
        console.log('Cards remaining: ' + this.deck.cardsRemaining() + '. Moving cards from throwPile to deck')
        this.addThrownCardsTodeck()
        participant.requestCard(this.deck.dealCard())
      }
    }
  }

  throwCards () {
    const cards = this.dealer.cardsOnHand.concat(this.currentPlayer.cardsOnHand)
    this.dealer.cardsOnHand.length = 0
    this.currentPlayer.cardsOnHand = 0

    cards.forEach((card) => {
      this.throwPile.push(card)
    })
  }

  addThrownCardsTodeck () {
    this.throwPile.forEach((card) => {
      this.deck.newDeck.push(card)
    })
    this.deck.shuffleCards()
    this.throwPile.length = 0
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
