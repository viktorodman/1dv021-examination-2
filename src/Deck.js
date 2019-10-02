'use strict'

class Deck {
  /* constructor () {

  }
 */
  createDeck () {
    /* const newDeck = []
    for (let i = 1; i <= 52; i++) {
      newDeck.push(i)
    }
    return newDeck */
    const SUIT = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
    const RANKS = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']
    const deck = []
    SUIT.forEach(function (suit) {
      RANKS.forEach(function (rank) {
        deck.push({
          suit: suit,
          rank: rank
        })
      })
    })
    return deck
  }

  shuffleCards () {
    // https://medium.com/@joshfoster_14132/best-javascript-shuffle-algorithm-c2c8057a3bc1
    const cards = this.createDeck().slice()
    let currentIndex = cards.length
    let temporaryValue = 0
    let randomIndex = 0

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      temporaryValue = cards[currentIndex]
      cards[currentIndex] = cards[randomIndex]
      cards[randomIndex] = temporaryValue
    }
    return cards
  }

  toString () {
    return this.shuffleCards()
  }
}

module.exports = Deck
