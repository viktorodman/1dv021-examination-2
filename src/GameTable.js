'use strict'
const Deck = require('./Deck')
const Dealer = require('./Dealer')
class GameTable {
  constructor (participants) {
    this.participants = participants
    this.newDeck = new Deck().createDeck()
    this.dealer = new Dealer(13)
    this.throwpile = []
  }

  newGame () {
    this.dealer.shuffleCards(this.newDeck)
    for (let i = 0; i < 5; i++) {
      this.dealer.drawCard(this.newDeck)
    }
    /* this.participants[0].cardsOnHand.push(5) */
    /* console.log(this.dealer.dealCard(this.newDeck)) */
    for (let i = 0; i < this.participants.length; i++) {
      this.participants[i].cardsOnHand = this.dealer.dealCard(this.newDeck)
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

  showParticipants () {
    return this.participants
  }
}

module.exports = GameTable
