const makeLatinSquare = (n) =>
  Array(n)
    .fill(2)
    .map((x, y) =>
      Array(n)
        .fill(1)
        .map((a, b) => (y + 1 + b > n ? y + 1 + b - n : y + 1 + b))
    );

console.log(makeLatinSquare(2), [
  [1, 2],
  [2, 1],
]);

console.log(makeLatinSquare(3), [
  [1, 2, 3],
  [2, 3, 1],
  [3, 1, 2],
]);
