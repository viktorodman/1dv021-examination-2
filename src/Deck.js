'use strict'

class Deck {
  constructor () {
    this.deck = this.createDeck()
  }

  createDeck () {
    const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
    const deck = []
    suits.forEach(function (suit) {
      ranks.forEach(function (rank, i) {
        deck.push({
          suit: suit,
          rank: rank,
          value: i + 2
        })
      })
    })
    return deck
  }
}

module.exports = Deck
