// Solution 1: One liner
const takeWhile = (arr, pred) =>
  pred(arr[0])
    ? arr.slice(
        0,
        arr.map((x) => pred(x)).indexOf(false) === -1
          ? arr.length
          : arr.map((x) => pred(x)).indexOf(false)
      )
    : [];

// Test Case

function isEven(num) {
  return num % 2 === 0;
}

function isOdd(num) {
  return num % 2 !== 0;
}

const isEvenTests = [
  [
    [2, 6, 4, 10, 1, 5, 4, 3],
    [2, 6, 4, 10],
  ],
  [
    [2, 100, 1000, 10000, 5, 3, 4, 6],
    [2, 100, 1000, 10000],
  ],
  [
    [998, 996, 12, -1000, 200, 0, 1, 1, 1],
    [998, 996, 12, -1000, 200, 0],
  ],
  [[1, 4, 2, 3, 5, 4, 5, 6, 7], []],
  [
    [2, 4, 10, 100, 64, 78, 92],
    [2, 4, 10, 100, 64, 78, 92],
  ],
];

const isOddTests = [
  [
    [1, 5, 111, 1111, 2, 4, 6, 4, 5],
    [1, 5, 111, 1111],
  ],
  [
    [-1, -5, 127, 86, 902, 2, 1],
    [-1, -5, 127],
  ],
  [[2, 1, 2, 4, 3, 5, 4, 6, 7, 8, 9, 0], []],
  [
    [1, 3, 5, 7, 9, 111],
    [1, 3, 5, 7, 9, 111],
  ],
];

console.log(takeWhile([2, 6, 4, 10, 1, 5, 4, 3], isEven));
console.log(takeWhile([2, 4, 10, 100, 64, 78, 92], isEven));
