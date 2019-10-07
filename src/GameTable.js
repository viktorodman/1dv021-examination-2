'use strict'
const Deck = require('./Deck')
const Dealer = require('./Dealer')
class GameTable {
  constructor (numberOfPlayers) {
    this.numberOfPlayers = numberOfPlayers
    this.newDeck = new Deck().createDeck()
    this.dealer = new Dealer(13)
    this.throwpile = []
  }

  newGame () {
    for (let i = 0; i < 5; i++) {
      this.dealer.drawCard(this.newDeck)
    }
  }

  thrownCards () {
    return this.throwPile
  }

  drawPile () {
    return this.newDeck
  }

  cardsOnHand () {
    return this.dealer.showCards()
  }
}

module.exports = GameTable
