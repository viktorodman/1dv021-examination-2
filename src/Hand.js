/**
 * Module for Hand
 *
 * @module src/Hand
 * @author Viktor Ödman
 * @version 1.1.0
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
    this.maxAmountOfCards = 5
  }

  /**
   * Adds cards to the hand
   *
   * @param {Card} card A card
   * @memberof Hand
   */
  addCard (card) {
    this.cardsOnHand.push(card)
  }

  /**
   * Returns the number of cards on the hand
   *
   * @returns {number} Returns the number of cards on hand
   * @memberof Hand
   */
  getLength () {
    return this.cardsOnHand.length
  }

  /**
   * Returns the hand
   *
   * @returns {Card[]} Returns the hand
   * @memberof Hand
   */
  getCards () {
    return this.cardsOnHand
  }

  /**
   * Gets the maximum amount of cards allowed on hand
   *
   * @returns {number} returns the maximum amount of cards allowed
   * @memberof Hand
   */
  getMaxAmountOfCards () {
    return this.maxAmountOfCards
  }

  /**
   * Removes the cards on hand and returns the removed cards
   *
   * @returns {Card[]} Returns the cards on the hand
   * @memberof Hand
   */
  emptyHand () {
    return this.cardsOnHand.splice(0, this.getLength())
  }

  /**
   * Creates a string of the hand
   *
   * @returns {string} A string representing the hand
   * @memberof Hand
   */
  handToString () {
    let cards = ''

    this.cardsOnHand.forEach((card) => {
      cards += card.cardToString()
    })

    if (this.getLength() === 0) {
      cards = '-'
    }

    return cards
  }
}

module.exports = Hand
