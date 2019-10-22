/**
 * Module for Card
 *
 * @module src/Card
 * @author Viktor Ödman
 * @version 1.0.0
*/

'use strict'

const Color = require('./Color')

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
    const color = new Color()
    return `${this.rank}${color.addSuitColor(this.suit)} `
  }
}

module.exports = Card
