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
const Players = require('./Players')
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
   * @param {number} dealerStopScore A stop value for the dealer
   * @memberof GameTable
   */
  constructor (numberOfPlayers, dealerStopScore) {
    this.dealerStopScore = dealerStopScore
    this.numberOfPlayers = numberOfPlayers
    this.dealer = undefined
    this.display = new Display()
    this.currentPlayer = undefined
    this.deck = undefined
    this.throwPile = new ThrowPile()
    this.players = undefined
    this.winner = undefined
  }

  /**
   * Adds the needed components for the game
   *
   * @memberof GameTable
   */
  prepareGame () {
    this.players = new Players(this.numberOfPlayers)
    this.players.addPlayers()
    this.dealer = new Dealer(this.dealerStopScore)
    this.deck = new Deck()
    this.deck.createDeck()
    this.deck.shuffleCards()
  }

  /**
   * Creates a new game
   */
  startGame () {
    this.prepareGame()
    this.firstRound()
    this.playAgainstDealer()
  }

  /**
   * Every player gets one card
   *
   * @memberof GameTable
   */
  firstRound () {
    this.players.getPlayers().forEach((player) => {
      player.requestCard(this.deck.dealCard())
    })
  }

  /**
   * Each players plays one at a time against the dealer
   *
   * @memberof GameTable
   */
  playAgainstDealer () {
    this.players.getPlayers().forEach((player) => {
      this.currentPlayer = player

      this.getCards(player)
      if (!this.checkWin(player, this.dealer)) {
        this.getCards(this.dealer)
        if (!this.checkWin(this.dealer, player)) {
          this.compare()
        }
      }
      this.results()
      this.nextRound()
    })
  }

  /**
   * Calls the display with the results
   *
   * @memberof GameTable
   */
  results () {
    this.display.setNewResult(this.winner, this.currentPlayer, this.dealer)
    this.display.displayReuslts()
  }

  /**
   * Prepares the next round
   *
   * @memberof GameTable
   */
  nextRound () {
    this.throwPile.addToThrowPile(this.currentPlayer.throwCards(), this.dealer.throwCards())
    this.dealer.resetScore()
  }

  /**
   *  Gives the player or the dealar a new card until they request to stop
   *
   * @param {Player{} or Dealer{}} participant Dealer or Player
   * @memberof GameTable
   */
  getCards (participant) {
    do {
      if (this.deck.cardsRemaining() > 1) {
        participant.requestCard(this.deck.dealCard())
      } else {
        this.deck.addThrownCards(this.throwPile.moveCardsTodeck())
        participant.requestCard(this.deck.dealCard())
      }
    }
    while (!participant.isDone())
  }

  /**
   *  Checks if the game should continue.
   *  Returns false if the game should continue
   *  Returns true if the game is done. Also sets the winner
   *
   * @param {Player{} or Dealer{}} p1
   * @param {Player{} or Dealer{}} p2
   * @returns {boolean} returns false if the game should continue
   * @memberof GameTable
   */
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
   * Compares the player and the dealers score and decides the winner
   *
   * @memberof GameTable
   */
  compare () {
    if (this.currentPlayer.score.getScore() === this.dealer.score.getScore()) {
      this.winner = this.dealer
    } else if (this.currentPlayer.score.getScore() < this.dealer.score.getScore()) {
      this.winner = this.dealer
    } else {
      this.winner = this.currentPlayer
    }
  }
}

module.exports = GameTable
