'use strict'

class ThrowPile {
  constructor () {
    this.throwPile = []
  }

  throwCards (thrownCards) {
    this.throwPile.push(thrownCards)
  }

  getThrownCards () {
    return this.throwPile
  }
}

module.exports = ThrowPile
