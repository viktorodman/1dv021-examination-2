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
    const line = '__________________________________________'
    /* const result = `${line}${this.resultToString()}${this.winnerToString()}${line}` */
    const result = `${line}\n\n${this.resultToString()}${line}`

    console.log(result)
  }

  /**
   * Creates a string that shows the result of the game
   *
   * @returns {string} returns a string of the result
   * @memberof Display
   */
  resultToString () {
    return `${this.participantToString(this.player)}\n${this.participantToString(this.dealer)}\n\n${this.winnerToString()}\n`
  }

  participantToString (participant) {
    let participantString
    if (this.winner.getName() === participant.getName()) {
      participantString = `${'\x1b[32m'}${participant.getName()}${'\x1b[0m'}${this.spacing(participant)}: ${participant.handToString()}  ${participant.scoreToString()} ${this.busted(participant)}`
    } else {
      participantString = `${participant.getName()}${this.spacing(participant)}: ${participant.handToString()}  ${participant.scoreToString()} ${this.busted(participant)}`
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
    return `\t${'\x1b[32m'}${this.winner.name}${'\x1b[0m'}: Wins!`
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
      busted += `${'\x1b[31m'} BUSTED!${'\x1b[0m'}`
    }
    return busted
  }

  spacing (participant) {
    const difference = this.player.getName().length - participant.getName().length
    let stringSpacing = ''
    for (let i = 0; i < difference; i++) {
      stringSpacing += ' '
    }
    return stringSpacing
  }
}

module.exports = Display
