/**
 * Module for Display
 *
 * @module src/Display
 * @author Viktor Ödman
 * @version 1.0.0
*/
'use strict'

/**
 * Represents a display
 *
 * @class Display
 */
class Display {
  /**
   * Creates an instance of Display.
   * @param {Dealer{}} dealer A dealer
   * @memberof Display
   */
  constructor (winner, player, dealer) {
    this.winner = winner
    this.player = player
    this.dealer = dealer
  }

  /**
   * Display the results of the game
   *
   * @memberof Display
   */
  displayReuslts () {
    const line = '----------------------------\n\n'
    const result = `${line}${this.resultToString()}${this.winnerToString()}${line}`

    console.log(result)
  }

  /**
   * Creates a string of the passed cards
   *
   * @param {Cards{}} hand A hand of cards
   * @returns {string} returns a string of playing cards
   * @memberof Display
   */
  cardsToString (hand) {
    let cards = ''
    hand.forEach((card) => {
      if (card.suit === '♥' || card.suit === '♦') {
        cards += `${card.rank}${'\x1b[31m'}${card.suit}${'\x1b[0m'} `
      } else {
        cards += `${card.rank}${'\x1b[30m'}${card.suit}${'\x1b[0m'} `
      }
    })
    return cards
  }

  /**
   * Creates a string that shows the result of the game
   *
   * @returns {string} returns a string of the results
   * @memberof Display
   */
  resultToString () {
    const playerResult = `${this.player.name}: ${this.cardsToString(this.player.cardsOnHand)} (${this.player.score}) (StopValue: ${this.player.stopScore})\n\n`
    let dealerResult = ''
    if (this.dealer.score === 0) {
      dealerResult += `${this.dealer.name}: -      \n`
    } else {
      dealerResult += `${this.dealer.name}    : ${this.cardsToString(this.dealer.cardsOnHand)} (${this.dealer.score})\n\n`
    }
    return playerResult + dealerResult
  }

  /**
   * Creates a string showing the winner
   *
   * @returns {string} returns a string showing the winner
   * @memberof Display
   */
  winnerToString () {
    return `\t${'\x1b[32m'}${this.winner.name}${'\x1b[0m'}: Wins!    \n`
  }
}

module.exports = Display
