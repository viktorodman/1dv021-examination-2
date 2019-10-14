class ThrowPile {
  constructor () {
    this.thrownCards = []
  }

  addThrownCard (playerCards, dealerCards) {
    const cards = playerCards.concat(dealerCards)
    cards.forEach((card) => {
      this.thrownCards.push(card)
    })
  }

  moveCardsTodeck () {
    const cards = this.thrownCards.slice()
    this.thrownCards.length = 0
    return cards
  }
}

module.exports = ThrowPile
