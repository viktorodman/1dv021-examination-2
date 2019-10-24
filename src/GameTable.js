/**
 * Module for GameTable
 *
 * @module src/GameTable
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
    this.players = new Players(numberOfPlayers)
    this.numberOfPlayers = numberOfPlayers
    this.dealerStopScore = dealerStopScore
    this.dealer = undefined
    this.display = new Display()
    this.currentPlayer = undefined
    this.deck = undefined
    this.throwPile = new ThrowPile()
    this.winner = undefined
  }

  /**
   * Adds the needed components for the game
   *
   * @memberof GameTable
   */
  prepareGame () {
    this.dealer = new Dealer(this.dealerStopScore)
    this.players.addPlayers()
    this.deck = new Deck()
    this.deck.createDeck()
    this.deck.shuffleCards()
  }

  /**
   * Starts a new game
   *
   * @memberof GameTable
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
      if (!this.endRound(player, this.dealer)) {
        this.getCards(this.dealer)
        if (!this.endRound(this.dealer, player)) {
          this.compareCards()
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
    this.display.setNewResult(this.currentPlayer, this.dealer)
    this.display.displayReuslts()
  }

  /**
   * Prepares the next round
   *
   * @memberof GameTable
   */
  nextRound () {
    this.throwPile.addToThrowPile(this.currentPlayer.throwCards(), this.dealer.throwCards())
    this.dealer.resetDealer()
  }

  /**
   *  Gives the player or the dealar a new card until they request to stop
   *
   * @param {(Player | Dealer)} participant Dealer or Player
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
   * @param {Player | Dealer} p1
   * @param {Player | Dealer} p2
   * @returns {boolean} returns false if the game should continue
   * @memberof GameTable
   */
  endRound (p1, p2) {
    let endGame = false
    if (this.checkWin(p1)) {
      this.winner = p1
      endGame = true
    } else if (this.checkBusted(p1)) {
      this.winner = p2
      endGame = true
    }
    return endGame
  }

  checkWin (p1) {
    let newWinner = false
    if (p1.score.getScore() === p1.score.getMaxScore()) {
      newWinner = true
    } else if (p1.score.getScore() <= p1.score.getMaxScore() && p1.hand.getLength() === p1.hand.getMaxAmountOfCards()) {
      newWinner = true
    }
    return newWinner
  }

  checkBusted (p1) {
    let busted = false
    if (p1.score.getScore() > p1.score.getMaxScore()) {
      busted = true
    }
    return busted
  }

  /**
   * Compares the player and the dealers score and decides the winner
   *
   * @memberof GameTable
   */
  compareCards () {
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
