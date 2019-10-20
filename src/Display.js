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
    this.winner = undefined
    this.player = undefined
    this.dealer = undefined
  }

  setNewResult (winner, player, dealer) {
    this.winner = winner
    this.player = player
    this.dealer = dealer
    this.color = new Color()
  }

  /**
   * Display the results of the game
   *
   * @memberof Display
   */
  displayReuslts () {
    console.log(
`

${this.participantToString(this.player)}
${this.participantToString(this.dealer)}

${this.winnerToString()} Wins
`)
  }

  participantToString (participant) {
    let participantString
    if (this.winner.getName() === participant.getName()) {
      participantString = `${this.winnerToString()}${this.nameSpacing(participant)}${': '}${participant.hand.handToString()}${participant.score.scoreToString()}${this.busted(participant)}`
    } else {
      participantString = `${participant.getName()}${this.nameSpacing(participant)}${': '}${participant.hand.handToString()}${participant.score.scoreToString()}${this.busted(participant)}`
    }
    return participantString
  }

  /**
   * Creates a string showing the winner
   *
   * @returns {string} returns a string showing the winner
   * @memberof Display
   */
  winnerToString () {
    return this.color.addWinnerColor(this.winner)
  }

  /**
   *
   *
   * @param {Dealer{} or Player{}} participant
   * @returns {string} Returns an empty string or the string ' BUSTED'
   * @memberof Display
   */
  busted (participant) {
    let busted = ''
    if (participant.checkLose()) {
      busted = this.color.addBustedColor(' BUSTED!')
    }
    return busted
  }

  nameSpacing (participant) {
    const difference = this.player.getName().length - participant.getName().length
    let stringSpacing = ''
    for (let i = 0; i < difference; i++) {
      stringSpacing += ' '
    }
    return stringSpacing
  }
}

module.exports = Display
