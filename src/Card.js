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
   * returns the value of the rank property
   *
   * @returns {string} returns the rank propertys value
   * @memberof Card
   */
  getRank () {
    return this.rank
  }

  /**
   * Sets the value property to a new value
   *
   * @param {number} newValue A number
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
    return `${this.rank}${color.addSuitColor(this.suit)} `
  }
}

module.exports = Card
