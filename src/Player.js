/**
 * Module for Player
 *
 * @module src/Player
 * @author Viktor Ödman
 * @version 1.0.0
*/
'use strict'

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
    this.cardsOnHand = []
    this.score = 0
  }

  /**
   * Adds to this.score from the card values
   *
   * @memberof Player
   */
  addToScore () {
    if (this.addCardValues() > 21) {
      for (let i = 0; i < this.cardsOnHand.length; i++) {
        if (this.cardsOnHand[i].rank === 'A') {
          this.cardsOnHand[i].value = 1
        }
        if (this.addCardValues() <= 21) {
          break
        }
      }
    }
    this.score = this.addCardValues()
  }

  /**
   * Adds a card to this.cardsOnHand
   *
   * @param {Card{}} card A playing card
   * @memberof Player
   */
  requestCard (card) {
    this.cardsOnHand.push(card)
    this.addToScore()
  }

  /**
   * Checks if player still wants to continue
   *
   * @returns {boolean} returns true or false
   * @memberof Player
   */
  isDone () {
    let done = false
    if (this.score < this.stopScore) {
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
    if (this.score === 21) {
      win = true
    } else if (this.score <= 21 && this.cardsOnHand.length === 5) {
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
    if (this.score > 21) {
      lose = true
    }
    return lose
  }

  /**
   * Removes the cards from players hand
   *
   * @returns {Cards[]}The removed cards
   * @memberof Player
   */
  throwCards () {
    const cards = this.cardsOnHand.slice()
    this.cardsOnHand.length = 0
    return cards
  }

  /**
   * Counts the sum of all card values
   *
   * @returns {number} return the sum of all card values
   * @memberof Player
   */
  addCardValues () {
    const currentScore = this.cardsOnHand.reduce((a, b) => a + b.value, 0)
    return currentScore
  }
}

module.exports = Player
