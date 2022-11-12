// One liner solution
const greatestProduct = (input) =>
  Math.max(
    ...Array(input.length - 4)
      .fill(1)
      .map((x, y) => [...input.slice(y, y + 5)].reduce((a, b) => +a * +b, 1))
  );

// Test Cases
console.log(
  greatestProduct('123834539327238239583'),
  3240,
  'The method gave a wrong answer'
);
console.log(
  greatestProduct('92494737828244222221111111532909999'),
  5292,
  'The method gave a wrong answer'
);
console.log(greatestProduct('92494737828244222221111111532909999'), 5292);
console.log(greatestProduct('92494737828244222221111111532909999'), 5292);
console.log(greatestProduct('02494037820244202221011110532909999'), 0);
