'use strict'
const Card = require('./Card')
class Deck {
  constructor () {
    this.newDeck = this.createDeck()
  }

  createDeck () {
    const deck = []
    const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
    suits.forEach(function (suit) {
      ranks.forEach(function (rank, value) {
        deck.push(new Card(suit, rank, value + 2))
      })
    })
    return deck
  }

  dealCard () {
    const card = this.cardsInDeck.pop()
    return card
  }
}

module.exports = Deck
