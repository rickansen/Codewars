// Solution 1 : Ugly :>>
var numberToPrice = function (number) {
  if (typeof number !== 'number') return 'NaN';
  let commaSep = number.toLocaleString();
  return commaSep.includes('.')
    ? commaSep
        .split('.')
        .map((x, y) => (y === 1 ? (x.length >= 2 ? x.slice(0, 2) : x + 0) : x))
        .join('.')
    : commaSep + '.00';
};

//Test Cases
console.log(numberToPrice(1500.129), '1,500.12');
console.log(numberToPrice(-5), '-5.00');
console.log(numberToPrice(1000000.5), '1,000,000.50');
console.log(numberToPrice('@'), 'NaN');
console.log(numberToPrice('invalid'), 'NaN');
