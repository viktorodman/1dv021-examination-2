'use strict'

class ThrowPile {
  createThrowPile () {
    return []
  }

  throwCards (thrownCards) {
    this.throwPile.push(thrownCards)
  }

  getThrownCards () {
    return this.throwPile
  }
}

module.exports = ThrowPile
