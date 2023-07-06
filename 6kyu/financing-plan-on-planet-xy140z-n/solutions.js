// Solution 1: To slow
const finance = (n) =>
  Array(n + 1)
    .fill(1)
    .map((x, y) =>
      Array(n - y + 1)
        .fill(y)
        .map((a, b) => a + b + y)
    )
    .reduce((a, c) => a.concat(c))
    .reduce((a, c) => a + c);

console.log(finance(5), 105);
console.log(finance(6), 168);
console.log(finance(8), 360);
console.log(finance(15), 2040);
