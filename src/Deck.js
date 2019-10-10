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
    const card = this.newDeck.pop()
    return card
  }

  shuffleCards () {
    // https://medium.com/@joshfoster_14132/best-javascript-shuffle-algorithm-c2c8057a3bc1
    let currentIndex = this.newDeck.length
    let temporaryValue = 0
    let randomIndex = 0

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      temporaryValue = this.newDeck[currentIndex]
      this.newDeck[currentIndex] = this.newDeck[randomIndex]
      this.newDeck[randomIndex] = temporaryValue
    }
  }
}

module.exports = Deck
