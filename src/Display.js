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
    this.winner = undefined
    this.player = undefined
    this.dealer = undefined
  }

  setNewResult (winner, player, dealer) {
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
    console.log(
`
${this.player.hand.getCards()}
┌${this.boxLine()}
│${this.participantToString(this.player)}
${this.participantToString(this.player).length}
│${this.participantToString(this.dealer)}
${this.participantToString(this.dealer).length}
├${this.boxLine()}
│${this.winnerToString()} Wins
└${this.boxLine()}
`)
  }

  participantToString (participant) {
    let participantString
    if (this.winner.getName() === participant.getName()) {
      participantString = `${this.winnerToString()}${this.nameSpacing(participant)}: ${participant.hand.handToString()}${participant.score.scoreToString()} ${this.busted(participant)}`
    } else {
      participantString = `${participant.getName()}${this.nameSpacing(participant)}: ${participant.hand.handToString()}${participant.score.scoreToString()} ${this.busted(participant)}`
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
    return `${'\x1b[32m'}${this.winner.name}${'\x1b[0m'}`
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
      busted += `${'\x1b[31m'}BUSTED!${'\x1b[0m'}`
    }
    return busted
  }

  nameSpacing (participant) {
    const difference = this.player.getName().length - participant.getName().length
    let stringSpacing = ''
    for (let i = 0; i < difference; i++) {
      stringSpacing += '\xa0'
    }
    return stringSpacing
  }

  boxLine () {
    let line = ''
    /*  if (this.participantToString(this.player).length > this.participantToString(this.dealer).length) {
      for (let i = 0; i < this.participantToString(this.player).length; i++) {
        line += '─'
      }
    } else if (this.participantToString(this.dealer).length > this.participantToString(this.player).length) {
      for (let i = 0; i < this.participantToString(this.dealer).length; i++) {
        line += '─'
      }
    } else {
      for (let i = 0; i < this.participantToString(this.player).length; i++) {
        line += '─'
      }
    } */
    for (let i = 0; i < this.player.getName().length + this.player.hand.handToString().length; i++) {
      line += '─'
    }
    return line
  }
}

module.exports = Display
