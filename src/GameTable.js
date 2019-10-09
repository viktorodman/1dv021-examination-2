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

    this.dealer = new Dealer()
    this.participants = new Participants(numberOfPlayers, playerStopValues, dealerStopValue).addParticipants()
    this.deck = new Deck()
    this.throwPile = new ThrowPile().createThrowPile()
  }

  startGame () {
    // Shuffle Cards
    const deck = this.deck.createDeck()
    this.dealer.shuffleCards(deck)
    // Hand out 1 card to all players
    for (let i = 0; i < this.participants.length; i++) {
      if (this.participants[i].name !== 'Dealer') {
        const card = this.dealer.dealCard(deck)
        this.participants[i].cardsOnHand.push(card)
      }
    }
    // First player gets another card
    /* const x = this.dealer.dealCard(this.deck)
    this.participants[0].cardsOnHand.push(x) */
    return deck.length
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
