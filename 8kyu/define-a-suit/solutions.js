function defineSuit(card) {
    if (card.includes("♠")) {
        return 'spades'
    } else if (card.includes("♦")) {
        return 'diamonds'
    } else if (card.includes("♥")) {
        return 'hearts'
    } else {
        return 'clubs'
    }
}

console.log(defineSuit('Q♠'), 'spades')
console.log(defineSuit('9♦'), 'diamonds')
console.log(defineSuit('J♥'), 'hearts')
