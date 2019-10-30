/**
 * Module for Score
 *
 * @module src/Score
 * @author Viktor Ödman
 * @version 1.1.0
*/

'use strict'

/**
 * Represents a participants Score
 *
 * @class Score
 */
class Score {
  /**
   * Creates an instance of Score.
   *
   * @memberof Score
   */
  constructor () {
    this.score = 0
    this.maxScore = 21
  }

  /**
  * Gets the score
  *
  * @returns {number} Returns the score
  * @memberof Score
  */
  getScore () {
    return this.score
  }

  /**
   * Sets the score
   *
   * @param {number} cardValues A new score
   * @memberof Score
   */
  setScore (cardValues) {
    this.score = cardValues
  }

  /**
   * Creates a string of the score
   *
   * @returns {string} Returns a string representing the score
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
   * @returns {number} Returns the max score
   * @memberof Score
   */
  getMaxScore () {
    return this.maxScore
  }
}

module.exports = Score
