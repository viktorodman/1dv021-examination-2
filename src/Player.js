'use strict'

class Player {
  constructor (name, stopscore) {
    this.name = name
    this.stopscore = stopscore
    this.cardsOnHand = []
    this.score = 0
  }

  addToScore (score) {
    this.score += score
  }
}

module.exports = Player
