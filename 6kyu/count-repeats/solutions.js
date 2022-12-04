// Solution 1: 🥱

const countRepeats = (str) =>
  str.length -
  [...str].filter((x, i) => i == 0 || !([...str][i - 1] == x)).length;

// Test Cases

console.log(countRepeats('AABCCD'), 2);
console.log(countRepeats('AABCCDA'), 2);
console.log(countRepeats('AaBBCCC'), 3);
