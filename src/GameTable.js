'use strict'
const Deck = require('./Deck')
const Dealer = require('./Dealer')
const Participants = require('./Participants')
const ThrowPile = require('./ThrowPile')

class GameTable {
  constructor (numberOfPlayers, playerStopValues, dealerStopValue) {
    this.numberOfPlayers = numberOfPlayers
    this.playerStopValues = playerStopValues
    this.dealerStopValue = dealerStopValue
    /* this.newDeck = new Deck().deck
    this.dealer = new Dealer(13)
    this.throwpile = [] */
    this.deck = undefined
    this.dealer = undefined
    this.participants = undefined
    this.throwPile = undefined
  }

  newGame () {
    this.deck = new Deck().deck
    this.dealer = new Dealer(this.dealerStopValue)
    this.participants = new Participants(this.numberOfPlayers, this.playerStopValues).addParticipants()
    this.throwPile = new ThrowPile()
    /* this.dealer.shuffleCards(this.newDeck)
    for (let i = 0; i < 5; i++) {
      this.dealer.drawCard(this.newDeck)
    }
    /* this.participants[0].cardsOnHand.push(5) */
    /* console.log(this.dealer.dealCard(this.newDeck))
    } */
    this.startGame()
  }

  startGame () {
    // Shuffle Cards
    this.dealer.shuffleCards(this.deck)
    // this.dealer.shuffleCards(this.deck)
    // Hand out 1 card to all players
    for (let i = 0; i < this.participants.length; i++) {
      this.participants[i].cardsOnHand = this.dealer.dealCard(this.deck)
    }
    return this.deck
  }

  showDealer () {
    return this.dealer
  }

  thrownCards () {
    return this.throwPile
  }

  drawPile () {
    return this.newDeck
  }

  cardsOnHand () {
    return this.dealer.showCards()
  }

  showParticipants () {
    return this.participants
  }
}

module.exports = GameTable
