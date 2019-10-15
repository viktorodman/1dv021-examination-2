'use strict'

class Player {
  constructor (name, stopScore) {
    this.name = name
    this.stopScore = stopScore
    this.cardsOnHand = []
    this.score = 0
  }

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

  requestCard (card) {
    this.cardsOnHand.push(card)
    this.addToScore()
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

  addCardValues () {
    const currentScore = this.cardsOnHand.reduce((a, b) => a + b.value, 0)
    return currentScore
  }
}

module.exports = Player
