const scoreThrows = (radii) =>
  radii.length === 0
    ? 0
    : radii
        .map((x) => (x < 5 ? 10 : x >= 5 && x <= 10 ? 5 : 0))
        .reduce((a, c) => a + c) + (radii.every((x) => x < 5) ? 100 : 0);

console.log(scoreThrows([1, 5, 11]), 15);
console.log(scoreThrows([15, 20, 30, 31, 32, 44, 100]), 0);
console.log(scoreThrows([1, 2, 3, 4]), 140);
console.log(scoreThrows([]), 0, 'Empty list');
console.log(scoreThrows([1, 2, 3, 4, 5, 6, 7, 8, 9]), 65);
console.log(scoreThrows([0, 5, 10, 10.5, 4.5]), 30);
