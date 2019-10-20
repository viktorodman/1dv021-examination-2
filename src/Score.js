'use strict'

class Score {
  constructor () {
    this.score = 0
  }

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
}

module.exports = Score
