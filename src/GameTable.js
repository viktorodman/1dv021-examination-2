/**
 * Module for GameTable
 *
 * @module src/Display
 * @author Viktor Ödman
 * @version 1.0.0
*/

'use strict'

const Deck = require('./Deck')
const Dealer = require('./Dealer')
const Participants = require('./Participants')
const ThrowPile = require('./ThrowPile')
const Display = require('./Display')

/**
 * Represents a Game Table
 *
 * @class GameTable
 */
class GameTable {
  /**
   * Creates an instance of GameTable.
   * @param {number} numberOfPlayers Amount of players playing
   * @param {number} playerStopScore A stop value for the players
   * @memberof GameTable
   */
  constructor (numberOfPlayers, playerStopScore) {
    this.dealer = undefined
    this.display = undefined
    this.currentPlayer = undefined
    this.deck = new Deck()
    this.throwPile = new ThrowPile()
    this.participants = new Participants(numberOfPlayers)
    this.winner = undefined
  }

  /**
   * Creates a new game
   */
  startGame () {
    this.participants.addPlayers()
    this.dealer = new Dealer(14)
    this.deck.createDeck()
    this.deck.shuffleCards()

    this.firstRound()
  }

  /**
   * Every player gets one card
   *
   * @memberof GameTable
   */
  firstRound () {
    this.participants.players.forEach((player) => {
      player.requestCard(this.deck.dealCard())
    })
    this.playAgainstDealer()
  }

  /**
   * Each players plays one at a time against the dealer
   *
   * @memberof GameTable
   */
  playAgainstDealer () {
    for (let i = 0; i < this.participants.players.length; i++) {
      this.currentPlayer = this.participants.players[i]
      this.getCards(this.currentPlayer)

      if (!this.checkWin(this.currentPlayer, this.dealer)) {
        this.getCards(this.dealer)

        if (!this.checkWin(this.dealer, this.currentPlayer)) {
          this.compare()
        }
      }
      this.nextPlayer()
    }
  }

  /**
   * Calls the display with the results
   *
   * @memberof GameTable
   */
  nextPlayer () {
    this.display = new Display(this.winner, this.currentPlayer, this.dealer)
    this.display.displayReuslts()

    this.throwPile.addToThrowPile(this.currentPlayer.throwCards(), this.dealer.throwCards())
    this.dealer.resetScore()
  }

  /**
   *  Gives the player or the dealar a new card until they request to stop
   *
   * @param {{}} participant Dealer or Player
   * @memberof GameTable
   */
  getCards (participant) {
    do {
      if (this.deck.cardsRemaining() !== 1) {
        participant.requestCard(this.deck.dealCard())
      } else {
        this.deck.addThrownCards(this.throwPile.moveCardsTodeck())
        participant.requestCard(this.deck.dealCard())
      }
    }
    while (!participant.isDone())
  }

  checkWin (p1, p2) {
    let endGame = false
    if (p1.checkWin()) {
      endGame = true
      this.winner = p1
    } else if (p1.checkLose()) {
      endGame = true
      this.winner = p2
    }
    return endGame
  }

  /**
   * Compare the player and the dealers score
   *
   * @memberof GameTable
   */
  compare () {
    if (this.currentPlayer.score === this.dealer.score) {
      this.winner = this.dealer
    } else if (this.currentPlayer.score < this.dealer.score) {
      this.winner = this.dealer
    } else {
      this.winner = this.currentPlayer
    }
  }
}

module.exports = GameTable
