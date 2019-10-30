/**
 * Module for Player
 *
 * @module src/Player
 * @author Viktor Ödman
 * @version 1.0.0
*/

'use strict'

const Hand = require('./Hand')
const Score = require('./Score')

/**
 * Represents a Player
 *
 * @class Player
 */
class Player {
  /**
   * Creates an instance of Player.
   * @param {string} name The name of the player
   * @param {number} stopScore Stop score for the player
   * @memberof Player
   */
  constructor (name) {
    this.name = name
    this.stopScore = undefined
    this.hand = new Hand()
    this.score = new Score()
  }

  /**
   * Gets the stop score of the player
   *
   * @returns {number} Stop score of the player
   * @memberof Player
   */
  getStopScore () {
    return this.stopScore
  }

  setStopScore (stopScore) {
    if (stopScore < 1 || stopScore > 22) {
      throw new Error('Stop Score must be greater than 2 or less than 21')
    }
    if (isNaN(stopScore)) {
      throw new Error('Stop Score must be a number')
    }
    this.stopScore = stopScore
  }

  /**
   * Checks for Aces in the hand and changes its values to 1
   * if its more favorable for the player
   *
   * @memberof Player
   */
  checkForAces () {
    if (this.addCardValues() > this.score.getMaxScore()) {
      for (let i = 0; i < this.hand.getLength(); i++) {
        if (this.hand.getCards()[i].getRank() === 'A') {
          this.hand.getCards()[i].setValue(1)
        }
        if (this.addCardValues() <= this.score.getMaxScore()) {
          break
        }
      }
    }
    this.score.setScore(this.addCardValues())
  }

  /**
   * Adds a card to the players hand
   *
   * @param {Card} card A card
   * @memberof Player
   */
  requestCard (card) {
    this.hand.addCard(card)
    this.checkForAces()
  }

  /**
   * Checks if player wants another card
   *
   * @returns {boolean} returns true or false
   * @memberof Player
   */
  isDone () {
    let done = false
    if (this.score.getScore() < this.getStopScore() && this.hand.getLength() < this.hand.getMaxAmountOfCards()) {
      done = false
    } else {
      done = true
    }
    return done
  }

  /**
   * Removes the cards from players hand
   *
   * @returns {Card[]} returns the removed cards
   * @memberof Player
   */
  throwCards () {
    return this.hand.emptyHand()
  }

  /**
   * Returns the sum of all card values
   *
   * @returns {number} return the sum of all card values
   * @memberof Player
   */
  addCardValues () {
    return this.hand.getCards().reduce((a, b) => a + b.value, 0)
  }

  /**
   * Gets the name of the player
   *
   * @returns {string} The name of the player
   * @memberof Player
   */
  getName () {
    return this.name
  }
}

module.exports = Player
