'use strict'

class Player {
  constructor (name, stopScore) {
    this.name = name
    this.stopScore = stopScore
    this.cardsOnHand = []
    this.score = 0
  }

  addToScore (card) {
    if (card.rank === 'A' && this.score > 7) {
      card.value = 1
    }
    this.score += card.value
  }

  requestCard (card) {
    this.cardsOnHand.push(card)
    this.addToScore(card)
  }

  isDone () {
    if (this.score < this.stopScore) {
      return false
    } else {
      return true
    }
  }

  checkWin () {
    let win = false
    if (this.score === 21) {
      win = true
    } else if (this.score <= 21 && this.cardsOnHand.length === 5) {
      win = true
    }
    return win
  }

  checkLose () {
    let lose = false
    if (this.score > 21) {
      lose = true
    }
    return lose
  }

  throwCards () {
    /* const cards = this.cardsOnHand.splice(0, this.cardsOnHand.length) */
    const cards = this.cardsOnHand.slice()
    this.cardsOnHand.length = 0
    return cards
  }
}

module.exports = Player
