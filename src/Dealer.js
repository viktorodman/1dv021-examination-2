/**
 * Module for Dealer
 *
 * @module src/Dealer
 * @author Viktor Ödman
 * @version 1.1.0
*/
'use strict'

const Player = require('./Player')

/**
 * Represents a Dealer
 *
 * @class Dealer
 * @extends {Player}
 */
class Dealer extends Player {
  /**
   * Creates an instance of Dealer.
   *
   * @memberof Dealer
   */
  constructor () {
    super('Dealer')
  }

  /**
   * Sets the dealers score to zero
   *
   * @memberof Dealer
   */
  resetDealer () {
    this.score.setScore(0)
  }
}
module.exports = Dealer
