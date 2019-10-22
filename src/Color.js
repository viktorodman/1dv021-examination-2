/**
 * Module for Color
 *
 * @module src/Color
 * @author Viktor Ödman
 * @version 1.0.0
*/

'use strict'

/**
 * Represents Colors
 *
 * @class Color
 */
class Color {
  /**
   * Creates an instance of Color.
   * @memberof Color
   */
  constructor () {
    this.red = '\x1b[31m'
    this.black = '\x1b[30m'
    this.green = '\x1b[32m'
    this.stopColor = '\x1b[0m'
    this.hearts = '♥'
    this.diamonds = '♦'
  }

  /**
   * Adds color the the suit of a card
   *
   * @param {string} suit suit of a card
   * @returns {string} returns a colored version of the passed string
   * @memberof Color
   */
  addSuitColor (suit) {
    let coloredSuit
    if (suit === this.hearts || suit === this.diamonds) {
      coloredSuit = `${this.red}${suit}${this.stopColor}`
    } else {
      coloredSuit = `${this.black}${suit}${this.stopColor}`
    }
    return coloredSuit
  }

  /**
   * Adds the color green to the passed string
   *
   * @param {string} anyString The passed string
   * @returns {string} The passed string but in a green color
   * @memberof Color
   */
  greenString (anyString) {
    return `${this.green}${anyString}${this.stopColor}`
  }

  /**
   * Adds a red color to the passed string
   *
   * @param {string} text the passed string
   * @returns {string} the passed string but in the color red
   * @memberof Color
   */
  redString (text) {
    return `${this.red}${text}${this.stopColor}`
  }
}

module.exports = Color
