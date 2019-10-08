'use strict'

class Player {
  constructor (name, stopscore) {
    this.name = name
    this.stopscore = stopscore
    this.cardsOnHand = []
    this.score = 0
  }

  createPlayer () {
    return {
      name: this.name,
      stopscore: this.stopscore,
      cardsOnHand: this.cardsOnHand,
      score: this.score
    }
  }
}

module.exports = Player
