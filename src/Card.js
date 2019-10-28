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
   * Creates an instance of Card.
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

  /**
   * Returns the cards rank
   *
   * @returns {string} A card rank
   * @memberof Card
   */
  getRank () {
    return this.rank
  }

  /**
   * Set the value of a card
   *
   * @param {number} newValue A value for a card
   * @memberof Card
   */
  setValue (newValue) {
    this.value = newValue
  }

  /**
   * Creates a string of the card
   *
   * @returns {string} returns a string representing the card
   * @memberof Card
   */
  cardToString () {
    const color = new Color()
    let cardString

    if (this.suit === '♥' || this.suit === '♦') {
      cardString = `${this.rank}${color.red(this.suit)}`
    } else {
      cardString = `${this.rank}${color.black(this.suit)}`
    }

    return cardString
  }
}

module.exports = Card
