const Deck = require('./Deck')
class Dealer {
  constructor (stopScore) {
    this.stopScore = stopScore
    this.cardsOnHand = []
  }

  drawCard (deck) {
    const drawnCard = deck.pop()
    this.cardsOnHand.push(drawnCard)
    return drawnCard
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
