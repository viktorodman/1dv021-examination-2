'use strict'

class Player {
  constructor (name, stopscore) {
    this.name = name
    this.stopscore = stopscore
  }

  createNewPlayer () {
    return {
      name: this.name,
      stopscore: this.stopscore,
      cardsOnHand: [],
      score: 0
    }
  }
}

module.exports = Player
