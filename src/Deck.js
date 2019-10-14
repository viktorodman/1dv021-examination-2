'use strict'
const Card = require('./Card')
class Deck {
  constructor () {
    this.newDeck = []
  }

  createDeck () {
    const suits = ['♣', '♦', '♥', '♠']
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Kn', 'Q', 'K', 'A']
    suits.forEach((suit) => {
      ranks.forEach((rank, value) => {
        this.newDeck.push(new Card(suit, rank, value + 2))
      })
    })
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

  addThrownCards (cards) {
    cards.forEach((card) => {
      this.newDeck.push(card)
    })
    this.shuffleCards()
  }

  cardsRemaining () {
    return this.newDeck.length
  }
}

module.exports = Deck
