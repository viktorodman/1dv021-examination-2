'use strict'

class Player {
  constructor (name, stopScore) {
    this.name = name
    this.stopScore = stopScore
    this.cardsOnHand = []
    this.score = 0
  }

  addToScore (card) {
    this.score += card
  }

  requestCard (card) {
    this.cardsOnHand.push(card)
    this.addToScore(card.value)
  }

  isDone () {
    if (this.score < this.stopScore && this.cardsOnHand.length <= 5) {
      return false
    } else {
      return true
    }
  }
}

module.exports = Player
