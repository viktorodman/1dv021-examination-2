/**
 * Module for Deck
 *
 * @module src/Deck
 * @author Viktor Ödman
 * @version 1.0.0
*/

'use strict'

const Card = require('./Card')

/**
 * Represents a Deck of cards
 *
 * @class Deck
 */
class Deck {
  /**
   * Creates an instance of Deck.
   * @memberof Deck
   */
  constructor () {
    this.newDeck = []
  }

  /**
   * Adds cards to the deck
   *
   * @memberof Deck
   */
  createDeck () {
    const suits = ['♣', '♦', '♥', '♠']
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Kn', 'Q', 'K', 'A']
    suits.forEach((suit) => {
      ranks.forEach((rank, value) => {
        this.newDeck.push(new Card(suit, rank, value + 2))
      })
    })
  }

  /**
   * Removes a card from the deck and returns it
   *
   * @returns {Card{}} returns a card
   * @memberof Deck
   */
  dealCard () {
    const card = this.newDeck.pop()
    return card
  }

  /**
   * Shuffles the cards in the deck
   *
   * @memberof Deck
   */
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

  /**
   * Adds cards to the deck
   *
   * @param {Card[]} cards thrown cards
   * @memberof Deck
   */
  addThrownCards (cards) {
    cards.forEach((card) => {
      this.newDeck.push(card)
    })
    this.shuffleCards()
  }

  /**
   * Shows the number of cards remaining in the deck
   *
   * @returns {number} returns the amount of cards left in the deck
   * @memberof Deck
   */
  cardsRemaining () {
    return this.newDeck.length
  }
}

module.exports = Deck
