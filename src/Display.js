/**
 * Module for Display
 *
 * @module src/Display
 * @author Viktor Ödman
 * @version 1.0.0
*/

'use strict'

const Color = require('./Color')

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
    this.winner = undefined
    this.busted = undefined
    this.color = new Color()
  }

  /**
   * Sets the winner player and dealer
   *
   * @param {Player{} or Dealer{}} winner The winner
   * @param {Player{}} player A Player
   * @param {Dealer{}} dealer A Dealer
   * @memberof Display
   */
  setNewResult (player, dealer, winner, busted) {
    this.player = player
    this.dealer = dealer
    this.winner = winner
    this.busted = busted
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
║${this.participantString(this.player)}
║${this.participantString(this.dealer)}
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
    let winner = `${this.color.green(this.player.getName())} Wins!`
    if (this.dealer === this.winner) {
      winner = `${this.color.green(this.dealer.getName())} Wins!`
    }
    return winner
  }

  participantString (p1) {
    let pString = `${p1.getName()}: ${p1.hand.handToString()} ${p1.score.scoreToString()}`
    if (p1 === this.winner) {
      pString = `${this.color.green(p1.getName())}: ${p1.hand.handToString()} ${p1.score.scoreToString()}`
    } else if (p1 === this.busted) {
      pString = `${p1.getName()}: ${p1.hand.handToString()} ${p1.score.scoreToString()} ${this.color.red('BUSTED !')}`
    }
    return pString
  }
}

module.exports = Display
