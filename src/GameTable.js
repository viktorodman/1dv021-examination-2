/**
 * Module for GameTable
 *
 * @module src/GameTable
 * @author Viktor Ödman
 * @version 1.1.0
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
   *
   * @param {number} numberOfPlayers The amount of players participating
   * @param {number} dealerStopScore The stop value for the dealer
   * @memberof GameTable
   */
  constructor (numberOfPlayers, dealerStopScore) {
    this.numberOfPlayers = numberOfPlayers
    this.dealerStopScore = dealerStopScore
    this.players = new Players()
    this.display = new Display()
    this.throwPile = new ThrowPile()
    this.dealer = new Dealer()
    this.deck = new Deck()
    this.winner = undefined
    this.busted = undefined
  }

  /**
   * Starts a new game
   *
   * @memberof GameTable
   */
  startGame () {
    this.prepareGame()
    this.firstRound()

    this.players.getPlayers().forEach((player) => {
      this.play(player)
    })
  }

  /**
   * Adds the needed components for the game
   *
   * @memberof GameTable
   */
  prepareGame () {
    this.dealer.setStopScore(this.dealerStopScore)
    this.players.setNumberOfPlayers(this.numberOfPlayers)
    this.players.addPlayers()
    this.deck.createDeck()
    this.deck.shuffleCards()
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
   * A player plays against the dealer
   *
   * @param {Player} player A player
   * @memberof GameTable
   */
  play (player) {
    this.getCards(player)
    if (!this.endRound(player, this.dealer)) {
      this.getCards(this.dealer)
      if (!this.endRound(this.dealer, player)) {
        this.compareCards(player)
      }
    }
    this.results(player)
    this.prepareNextRound(player)
  }

  /**
   *  Gives a person a new card until they request to stop
   *
   * @param {(Player | Dealer)} person A dealer or player
   * @memberof GameTable
   */
  getCards (person) {
    do {
      if (this.deck.cardsRemaining() > 1) {
        person.requestCard(this.deck.dealCard())
      } else {
        this.deck.addThrownCards(this.throwPile.moveCardsTodeck())
        person.requestCard(this.deck.dealCard())
      }
    }
    while (!person.isDone())
  }

  /**
   *  Checks if the round should continue.
   *
   * @param {Player | Dealer} person1 A player or dealer
   * @param {Player | Dealer} person2 A player or dealer
   * @returns {boolean} returns false if the round should continue
   * @memberof GameTable
   */
  endRound (person1, person2) {
    let endGame = false
    if (this.checkWin(person1)) {
      this.winner = person1
      endGame = true
    } else if (this.checkBusted(person1)) {
      this.busted = person1
      this.winner = person2
      endGame = true
    }
    return endGame
  }

  /**
   * Checks if the passed person wins
   *
   * @param {(Player | Dealer)} person A player or dealer
   * @returns {boolean} Returns true if the person wins
   * @memberof GameTable
   */
  checkWin (person) {
    let newWinner = false
    if (person.score.getScore() === person.score.getMaxScore()) {
      newWinner = true
    } else if (person.score.getScore() <= person.score.getMaxScore() && person.hand.getLength() === person.hand.getMaxAmountOfCards()) {
      newWinner = true
    }
    return newWinner
  }

  /**
   * Checks if the person gets busted
   *
   * @param {(Player | Dealer)} person A player or dealer
   * @returns {boolean} Returns true if the person gets busted
   * @memberof GameTable
   */
  checkBusted (person) {
    let busted = false
    if (person.score.getScore() > person.score.getMaxScore()) {
      busted = true
    }
    return busted
  }

  /**
   * Compares the player and the dealers score and decides the winner
   *
   * @param {Player} player A player
   * @memberof GameTable
   */
  compareCards (player) {
    if (player.score.getScore() === this.dealer.score.getScore()) {
      this.winner = this.dealer
    } else if (player.score.getScore() < this.dealer.score.getScore()) {
      this.winner = this.dealer
    } else {
      this.winner = player
    }
  }

  /**
   * Calls the display with the results
   *
   * @param {Player} player A player
   * @memberof GameTable
   */
  results (player) {
    this.display.setNewResult(player, this.dealer, this.winner, this.busted)
    this.display.displayReuslts()
  }

  /**
   * Prepares the next round
   *
   * @param {Player} player A player
   * @memberof GameTable
   */
  prepareNextRound (player) {
    this.throwPile.addToThrowPile(player.throwCards(), this.dealer.throwCards())
    this.dealer.resetDealer()
    this.busted = undefined
  }
}

module.exports = GameTable
