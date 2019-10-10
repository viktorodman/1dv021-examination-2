'use strict'

const Player = require('./Player')
class Dealer extends Player {
  constructor (stopScore) {
    super('Dealer', stopScore)
    this.cardsOnHand = []
    this.score = 0
  }
}
module.exports = Dealer
