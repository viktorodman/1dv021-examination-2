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
   *Creates an instance of Display.
   * @param {Dealer{} or Player{}} winner
   * @param {Player{}} Player
   * @param {Dealer{}} Dealer
   * @memberof Display
   */
  constructor () {
    this.player = undefined
    this.dealer = undefined
  }

  /**
   * Sets the winner player and dealer
   *
   * @param {Player{} or Dealer{}} winner The winner
   * @param {Player{}} player A Player
   * @param {Dealer{}} dealer A Dealer
   * @memberof Display
   */
  setNewResult (player, dealer) {
    this.player = player
    this.dealer = dealer
  }

  /**
   * Display the results of the game
   *
   * @memberof Display
   */
  displayReuslts () {
    console.log(
` Player Stop Score: ${this.player.getStopScore()}\n Dealer Stop Score: ${this.dealer.getStopScore()}
╔═══════════════════════════════════════
║${this.player.toString()}
║${this.dealer.toString()}
╠═══════════════════════════════════════
║         ${this.winnerToString()}
╚═══════════════════════════════════════
`)
  }

  /**
   * Creates a string showing the winner
   *
   * @returns {string} returns a string showing the winner
   * @memberof Display
   */
  winnerToString () {
    let winner = ''
    if (this.player.getWin()) {
      winner = this.player.nameToString()
    } else {
      winner = this.dealer.nameToString()
    }
    return winner + ' Wins !'
  }
}

module.exports = Display
