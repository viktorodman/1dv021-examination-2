'use strict'

class Card {
  constructor () {
    this.suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
    this.ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
    // this.value = value
  }

  createCard (suit, rank, value) {
    return { suit: suit, rank: rank, value: value }
  }
}

module.exports = Card
