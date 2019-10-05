'use strict'
const Deck = require('./src/Deck')
const Dealer = require('./src/Dealer')

const dealer = new Dealer(13)
console.log(dealer.showCards())

/* const shuffleCards = deck.toString()

console.log(shuffleCards) */
