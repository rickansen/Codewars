const checkValidTrNumber = (n) =>
  /^([0-9]{11})$/.test(n) &&
  +n &&
  n[0] != '0' &&
  ([...String(n).slice(0, 9)]
    .filter((x, y) => y % 2 != 1)
    .reduce((a, c) => a + +c, 0) *
    7 -
    [...String(n).slice(0, 8)]
      .filter((x, y) => y % 2 == 1)
      .reduce((a, c) => a + +c, 0)) %
    10 ==
    String(n)[9] &&
  [...String(n).slice(0, 10)].reduce((a, c) => a + +c, 0) % 10 == String(n)[10];

console.log(checkValidTrNumber(6923522112), false);
console.log(checkValidTrNumber(692352217312), false);
console.log(checkValidTrNumber('x5810a78432'), false);
console.log(checkValidTrNumber(36637640050), true);
console.log(checkValidTrNumber(12762438338), false);
