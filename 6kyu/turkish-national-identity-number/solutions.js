// Spaghetti-one-liner
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

// Cleaner code; maybe

function checkValidTrNumber(n) {
  arr = [...String(n)];

  let isElevenDigits = arr.length === 11;
  let nonZero = arr[0] != 0;
  let oddSumMultiply =
    arr
      .slice(0, 9)
      .filter((x, y) => y % 2 != 1)
      .reduce((a, c) => a + +c, 0) * 7;
  let evenSum = arr
    .slice(0, 8)
    .filter((x, y) => y % 2 == 1)
    .reduce((a, c) => a + +c, 0);
  let modulo = (oddSumMultiply - evenSum) % 10 == arr[9];
  let sumTenDigits =
    arr.slice(0, 10).reduce((a, c) => a + +c, 0) % 10 == arr[10];

  return isElevenDigits && nonZero && modulo && sumTenDigits;
}

// It is an 11 digit number
// First digit can't be zero
// Take the sum of 1st, 3rd, 5th, 7th and 9th digit and multiply it by 7. Then subtract the sum of 2nd, 4th, 6th and 8th digits from this value. Modulus 10 of the result should be equal to 10th digit.
// Sum of first ten digits' modulus 10 should be equal to eleventh digit.

console.log(checkValidTrNumber(6923522112), false);
console.log(checkValidTrNumber(692352217312), false);
console.log(checkValidTrNumber('x5810a78432'), false);
console.log(checkValidTrNumber(36637640050), true);
console.log(checkValidTrNumber(12762438338), false);
