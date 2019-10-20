'use strict'

class Color {
  constructor () {
    this.red = '\x1b[31m'
    this.black = '\x1b[30m'
    this.green = '\x1b[32m'
    this.stopColor = '\x1b[0m'
  }

  addSuitColor (suit) {
    let coloredSuit
    if (suit === '♥' || suit === '♦') {
      coloredSuit = `${this.red}${suit}${this.stopColor}`
    } else {
      coloredSuit = `${this.black}${suit}${this.stopColor}`
    }
    return coloredSuit
  }

  addWinnerColor (winner) {
    return `${this.green}${winner.name}${this.stopColor}`
  }

  addBustedColor (text) {
    return `${this.red}${text}${this.stopColor}`
  }
}

module.exports = Color
