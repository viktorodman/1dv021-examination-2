'use strict'
/**
 *
 *
 * @class Score
 */
class Score {
  constructor () {
    this.score = 0
    this.maxScore = 21
  }

  /**
 *
 *
 * @returns
 * @memberof Score
 */
  getScore () {
    return this.score
  }

  setScore (cardValues) {
    this.score = cardValues
  }

  scoreToString () {
    let score = ''
    if (this.score > 0) {
      score = `(${this.score})`
    }
    return score
  }

  getMaxScore () {
    return this.maxScore
  }
}

module.exports = Score
