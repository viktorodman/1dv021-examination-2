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
   * Creates an instance of Display.
   *
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
   * @param {(Player | Dealer)} winner A player or dealer
   * @param {Player} player A Player
   * @param {Dealer} dealer A Dealer
   * @param {(Player | Dealer)} busted A player or dealer
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
    console.log(this.resultToString())
  }

  /**
   * Creates a string with the results
   *
   * @returns {string} returns a string with the results
   * @memberof Display
   */
  resultToString () {
    return ` 
    Player Stop Score: ${this.player.getStopScore()}
    Dealer Stop Score: ${this.dealer.getStopScore()}
   ╔═══════════════════════════════════════
   ║${this.participantString(this.player)}
   ║${this.participantString(this.dealer)}
   ╠═══════════════════════════════════════
   ║         ${this.winnerToString()}
   ╚═══════════════════════════════════════
   `
  }

  /**
   * Creates a string representing the winner
   *
   * @returns {string} returns a string representing the winner
   * @memberof Display
   */
  winnerToString () {
    let winner = `${this.color.green(this.player.getName())} Wins!`

    if (this.dealer === this.winner) {
      winner = `${this.color.green(this.dealer.getName())} Wins!`
    }

    return winner
  }

  /**
   * Creates a string representing a player or dealer.
   *
   * @param {(Player | Dealer)} p1 A player or dealer
   * @returns {string} A string representing a player or dealer
   * @memberof Display
   */
  participantString (p1) {
    let pString = `${p1.getName()}: ${p1.hand.handToString()} ${p1.score.scoreToString()}`

    if (p1 === this.winner) {
      pString = `${this.color.green(p1.getName())}: ${p1.hand.handToString()} ${p1.score.scoreToString()}`
    }

    if (p1 === this.busted) {
      pString = pString + this.color.red(' BUSTED!')
    }

    return pString
  }
}

module.exports = Display
