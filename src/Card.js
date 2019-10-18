/**
 * Module for Card
 *
 * @module src/Card
 * @author Viktor Ödman
 * @version 1.0.0
*/

'use strict'

/**
 * Represents a card
 * @class Card
 */
class Card {
  /**
   *Creates an instance of Card.
   * @param {string} suit Suit of the card
   * @param {string} rank Rank of the card
   * @param {number} value Value of the card
   * @memberof Card
   */
  constructor (suit, rank, value) {
    this.suit = suit
    this.rank = rank
    this.value = value
  }

  getRank () {
    return this.rank
  }

  setValue (newValue) {
    this.value = newValue
  }

  cardToString () {
    let cardString = ''
    if (this.suit === '♥' || this.suit === '♦') {
      cardString += `${this.rank}${'\x1b[31m'}${this.suit}${'\x1b[0m'} `
    } else {
      cardString += `${this.rank}${'\x1b[30m'}${this.suit}${'\x1b[0m'} `
    }
    return cardString
  }
}

module.exports = Card
