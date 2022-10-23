function scoreHand(cards) {
  const nonDigits = { K: 10, Q: 10, J: 10 };
  if (cards.findIndex((x) => /[KQJ]/.test(x)) === -1 && !cards.includes('A'))
    return cards.reduce((a, b) => +a + +b, 0);
  if (!cards.includes('A'))
    return cards
      .map((x) => (/[KQJ]/.test(x) ? nonDigits[x] : x))
      .reduce((a, b) => +a + +b, 0);
  const sumOfNonA =
    cards.filter((x) => x !== 'A').length !== 0
      ? cards.filter((x) => x !== 'A').reduce((a, b) => +a + +b, 0)
      : 0;
  return cards.filter((x) => x === 'A');
}

console.log(scoreHand(['2', '3']), 5);
console.log(scoreHand(['7', '7', '8']), 22);
console.log(scoreHand(['4', '7', '8']), 19);

// should score J, Q and K as 10
console.log(scoreHand(['K', 'J', 'Q', 12]), 30);

// should core hands with Aces correctly
console.log(scoreHand(['A', '3']), 14);
console.log(scoreHand(['A', 'A']), 12);
console.log(scoreHand(['A', '2', 'A', '9', '9']), 22);
