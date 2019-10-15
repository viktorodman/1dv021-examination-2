'use strict'

class Display {
  constructor () {
    this.winner = undefined
    this.player = undefined
    this.dealer = undefined
  }

  displayReuslts () {
    console.log('----------------------------\n')
    console.log(`${this.player.name}: ${this.cardsToString(this.player.cardsOnHand)} (${this.player.score})\n`)
    if (this.dealer.cardsOnHand.length === 0) {
      console.log(`${this.dealer.name}   : -      \n`)
    } else {
      console.log(`${this.dealer.name}   : ${this.cardsToString(this.dealer.cardsOnHand)} (${this.dealer.score})\n`)
    }

    console.log(`\t${this.winner.name}: Wins!    \n`)
    console.log('----------------------------\n')
  }

  cardsToString (hand) {
    let cards = ''
    hand.forEach(function (card) {
      cards += `${card.rank}${card.suit} `
    })
    return cards
  }
}

module.exports = Display
