/**
 * Module for Hand
 *
 * @module src/Hand
 * @author Viktor Ödman
 * @version 1.0.0
*/

'use strict'

/**
 * Represent a hand of playing cards
 *
 * @class Hand
 */
class Hand {
  /**
   * Creates an instance of Hand.
   * @memberof Hand
   */
  constructor () {
    this.cardsOnHand = []
  }

  /**
   * Adds cards to the hand
   *
   * @param {Card} card
   * @memberof Hand
   */
  addCard (card) {
    this.cardsOnHand.push(card)
  }

  /**
   * Returns the number of cards in the hand
   *
   * @returns {number} returns the number of cards on hand
   * @memberof Hand
   */
  getLength () {
    return this.cardsOnHand.length
  }

  /**
   * Returns the hand
   *
   * @returns {Card[]} returns the hand
   * @memberof Hand
   */
  getCards () {
    return this.cardsOnHand
  }

  /**
   * Returns the cards on the hand and removes the cars on hand
   *
   * @returns {Card[]} returns the cards on the hand
   * @memberof Hand
   */
  emptyHand () {
    return this.cardsOnHand.splice(0, this.getLength())
  }

  /**
   * Creates a string of the cards on the hand
   *
   * @returns {string} A string representing the cards on hand
   * @memberof Hand
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
