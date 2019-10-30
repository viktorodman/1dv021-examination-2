/**
 * Module for ThrowPile
 *
 * @module src/ThrowPile
 * @author Viktor Ödman
 * @version 1.1.0
*/

'use strict'

/**
 * Represents a throw pile
 *
 * @class ThrowPile
 */
class ThrowPile {
  /**
   * Creates an instance of ThrowPile.
   * @memberof ThrowPile
   */
  constructor () {
    this.thrownCards = []
  }

  /**
   * Adds cards to thrownCards
   *
   * @param {Card[]} playerCards the players cards
   * @param {Card[]} dealerCards the dealers cards
   * @memberof ThrowPile
   */
  addToThrowPile (playerCards, dealerCards) {
    const cards = playerCards.concat(dealerCards)
    cards.forEach((card) => {
      this.thrownCards.push(card)
    })
  }

  /**
   * Removes the cards from thrownCards and
   * returns the removed cards
   *
   * @returns {Card[]} Returns the cards in thrownCards
   * @memberof ThrowPile
   */
  moveCardsTodeck () {
    return this.thrownCards.splice(0, this.thrownCards.length)
  }
}

module.exports = ThrowPile
