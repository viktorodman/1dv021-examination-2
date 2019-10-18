/**
 * Module for ThrowPile
 *
 * @module src/ThrowPile
 * @author Viktor Ödman
 * @version 1.0.0
*/
'use strict'
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
   * Removes the cards from thrownCards and returns them
   *
   * @returns returns the cards in thrownCards
   * @memberof ThrowPile
   */
  moveCardsTodeck () {
    /* const cards = this.thrownCards.slice()
    this.thrownCards.length = 0 */
    return this.thrownCards.splice(0, this.thrownCards.length)
  }
}

module.exports = ThrowPile
