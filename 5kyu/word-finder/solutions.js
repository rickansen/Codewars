//Solution 1: Hard to read
function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.getMatchingWords = function (pattern) {
  return this.words
    .filter((x) => x.length === pattern.length)
    .filter(
      (x) =>
        [...x].map((a, b) => (pattern[b] === '?' ? '?' : a)).join('') ===
        pattern
    );
};

// Test Cases
const fruits = new Dictionary(['banana', 'apple', 'papaya', 'cherry']);
console.log(fruits.getMatchingWords('lemon'), []);
console.log(fruits.getMatchingWords('cherr??'), []);
console.log(fruits.getMatchingWords('?a?a?a'), ['banana', 'papaya']);
console.log(fruits.getMatchingWords('??????'), ['banana', 'papaya', 'cherry']);
console.log(fruits.getMatchingWords('?????'), ['apple']);
