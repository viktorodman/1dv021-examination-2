/**
 * Module for Dealer
 *
 * @module src/Dealer
 * @author Viktor Ödman
 * @version 1.0.0
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
   * @param {number} stopScore Stopscore
   * @memberof Dealer
   */
  constructor (stopScore) {
    super('Dealer', stopScore)
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
