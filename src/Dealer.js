const Deck = require('./Deck')
const Player = require('./Player')
class Dealer extends Player {
  constructor (stopScore) {
    super('Dealer', stopScore)
    this.cardsOnHand = []
    this.score = 0
  }

  createDealer () {
    super.createPlayer()
  }

  drawCard (deck) {
    const drawnCard = deck.pop()
    this.cardsOnHand.push(drawnCard)
    return drawnCard
  }

  dealCard (deck) {
    const example = deck.pop()
    return example
  }

  shuffleCards (deckOfCards) {
    // https://medium.com/@joshfoster_14132/best-javascript-shuffle-algorithm-c2c8057a3bc1
    let currentIndex = deckOfCards.length
    let temporaryValue = 0
    let randomIndex = 0

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      temporaryValue = deckOfCards[currentIndex]
      deckOfCards[currentIndex] = deckOfCards[randomIndex]
      deckOfCards[randomIndex] = temporaryValue
    }
    return deckOfCards
  }

  showCards () {
    return this.cardsOnHand
  }
}
module.exports = Dealer
