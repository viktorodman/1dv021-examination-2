'use strict'
const Card = require('./Card')
class Deck {
  constructor () {
    this.deck = this.createDeck()
  }

  createDeck () {
    const card = new Card()
    const newDeck = []
    card.suits.forEach(function (suit) {
      card.ranks.forEach(function (rank, value) {
        newDeck.push(new Card().createCard(suit, rank, value + 2))
      })
    })
    return newDeck
  }
}

module.exports = Deck
