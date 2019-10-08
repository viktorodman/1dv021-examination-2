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
      card.ranks.forEach(function (rank, i) {
        newDeck.push({
          suit: suit,
          rank: rank,
          value: i + 2
        })
      })
    })
    return newDeck
  }
}

module.exports = Deck
