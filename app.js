'use strict'
const Deck = require('./src/Deck')
const Dealer = require('./src/Dealer')

const deck = new Deck()
const dealer = new Dealer(13)

const newDeck = deck.createDeck()
const shuffledDeck = dealer.shuffleCards(newDeck)
const newCard = dealer.drawCard(shuffledDeck)

console.log(newCard)
/* const shuffleCards = deck.toString()

console.log(shuffleCards) */
