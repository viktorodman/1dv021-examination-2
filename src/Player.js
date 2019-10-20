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
  constructor (name, stopScore) {
    this.name = name
    this.stopScore = stopScore
    this.hand = new Hand()
    this.score = new Score()
  }

  /**
   * Checks for Aces in the hand and changes its values to 1
   * if its more favorable for the player
   *
   * @memberof Player
   */
  checkForAces () {
    if (this.addCardValues() > 21) {
      for (let i = 0; i < this.hand.getLength(); i++) {
        if (this.hand.getCards()[i].getRank() === 'A') {
          this.hand.getCards()[i].setValue(1)
        }
        if (this.addCardValues() <= 21) {
          break
        }
      }
    }
    this.score.setScore(this.addCardValues())
  }

  /**
   * Adds a card to the players hand
   *
   * @param {Card{}} card A card
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
    if (this.score.getScore() < this.stopScore && this.hand.getLength() < 5) {
      done = false
    } else {
      done = true
    }
    return done
  }

  /**
   * Checks if the player won
   *
   * @returns {boolean} return true or false
   * @memberof Player
   */
  checkWin () {
    let win = false
    if (this.score.getScore() === 21) {
      win = true
    } else if (this.score.getScore() <= 21 && this.hand.getLength() === 5) {
      win = true
    }
    return win
  }

  /**
   * Checks if the player lost
   *
   * @returns {boolean} returns true or false
   * @memberof Player
   */
  checkLose () {
    let lose = false
    if (this.score.getScore() > 21) {
      lose = true
    }
    return lose
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

  getName () {
    return this.name
  }

  getStopScore () {
    return this.stopScore
  }
}

module.exports = Player
