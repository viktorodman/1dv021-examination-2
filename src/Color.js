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
    this.redColor = '\x1b[31m'
    this.blackColor = '\x1b[30m'
    this.greenColor = '\x1b[32m'
    this.stopColor = '\x1b[0m'
  }

  /**
   * Adds the color green to the passed string
   *
   * @param {string} text The passed string
   * @returns {string} The passed string but in a green color
   * @memberof Color
   */
  green (text) {
    return `${this.greenColor}${text}${this.stopColor}`
  }

  /**
   * Adds the color red to the passed string
   *
   * @param {string} text The passed string
   * @returns {string} The passed string but in a red color
   * @memberof Color
   */
  red (text) {
    return `${this.redColor}${text}${this.stopColor}`
  }

  /**
   * Adds the color black to the passed string
   *
   * @param {string} text The passed string
   * @returns {string} The passed string but in a black color
   * @memberof Color
   */
  black (text) {
    return `${this.blackColor}${text}${this.stopColor}`
  }
}

module.exports = Color
