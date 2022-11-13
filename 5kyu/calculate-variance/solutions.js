// Onle line solution

var variance = (num) =>
  num.reduce(
    (a, b) => a + (b - num.reduce((a, b) => a + b) / num.length) ** 2,
    0
  ) / num.length;

// Test Cases

var numbers1 = [-10, 0, 10, 20, 30];
var numbers2 = [8, 9, 10, 11, 12];
var numbers3 = [1.5, 2.5, 4, 2, 1, 1];

console.log(
  variance(numbers1),
  '200.0000',
  'Variance for the first example set is not correct'
);
console.log(
  variance(numbers2),
  '2.0000',
  'Variance for the second example set is not correct'
);
console.log(
  variance(numbers3),
  '1.0833',
  'Variance for the third example set is not correct'
);
