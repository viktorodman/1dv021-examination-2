/**
 * Module for Dealer
 *
 * @module src/Dealer
 * @author Viktor Ödman
 * @version 1.0.0
*/
'use strict'

const Player = require('./Player')
const Hand = require('./Hand')

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
    /* this.cardsOnHand = [] */
    this.hand = new Hand()
    this.score = 0
  }

  /**
   * Sets the dealers score to zero
   *
   * @memberof Dealer
   */
  resetScore () {
    this.score = 0
  }
}
module.exports = Dealer
