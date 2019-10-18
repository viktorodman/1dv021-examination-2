'use strict'

class Hand {
  constructor () {
    this.cardsOnHand = []
  }

  addCard (card) {
    this.cardsOnHand.push(card)
  }

  getLength () {
    return this.cardsOnHand.length
  }

  getCards () {
    return this.cardsOnHand
  }

  emptyHand () {
    return this.cardsOnHand.splice(0, this.getLength())
  }

  /**
   * Creates a string of the passed cards
   *
   * @returns {string} returns a string of playing cards
   * @memberof Player
   */
  handToString () {
    let cards = ''
    if (this.getLength === 0) {
      cards = '-'
    } else {
      this.cardsOnHand.forEach((card) => {
        cards += card.cardToString()
      })
    }
    return cards
  }
}

module.exports = Hand
