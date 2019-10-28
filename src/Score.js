/**
 * Module for Score
 *
 * @module src/Score
 * @author Viktor Ödman
 * @version 1.0.0
*/

'use strict'

/**
 * Represents the players score
 *
 * @class Score
 */
class Score {
  /**
   * Creates an instance of Score.
   * @memberof Score
   */
  constructor () {
    this.score = 0
    this.maxScore = 21
  }

  /**
  * gets the score
  *
  * @returns {number} returns the score
  * @memberof Score
  */
  getScore () {
    return this.score
  }

  /**
  * sets the score
  *
  * @memberof Score
  */
  setScore (cardValues) {
    this.score = cardValues
  }

  /**
   * Creates a string of the score
   *
   * @returns {string} returns a string representing the score
   * @memberof Score
   */
  scoreToString () {
    let score = ''
    if (this.score > 0) {
      score = `(${this.score})`
    }
    return score
  }

  /**
   * Gets the maximum score of the game
   *
   * @returns {number} returns the max score
   * @memberof Score
   */
  getMaxScore () {
    return this.maxScore
  }
}

module.exports = Score
