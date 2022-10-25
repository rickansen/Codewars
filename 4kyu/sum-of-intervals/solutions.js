// Solution 1: Working but too slow so it is not passing large tests
function sumIntervals(intervals) {
  let sorted = intervals
    .sort((a, b) => a[0] - b[0])
    .map((x, y, z) =>
      y !== 0 ? (x[0] < z[y - 1][1] ? [z[y - 1][1], x[1]] : x) : x
    )
    .map((x) => (x[0] > x[1] ? [x[0], x[0]] : x));

  while (
    sorted.reduce((a, b) => a.concat(b)).join('') !==
    sorted
      .sort((a, b) => a[0] - b[0])
      .reduce((a, b) => a.concat(b))
      .join('')
  ) {
    sorted = sorted
      .sort((a, b) => a[0] - b[0])
      .map((x, y, z) =>
        y !== 0 ? (x[0] < z[y - 1][1] ? [z[y - 1][1], x[1]] : x) : x
      )
      .map((x) => (x[0] > x[1] ? [x[0], x[0]] : x));
  }

  return sorted.map((x) => x.reduce((a, b) => b - a)).reduce((a, b) => a + b);
}

console.log(
  sumIntervals([
    [1, 2],
    [6, 10],
    [11, 15],
  ]),
  9
);

console.log(
  sumIntervals([
    [1, 4],
    [7, 10],
    [3, 5],
  ]),
  7
);

console.log(
  sumIntervals([
    [1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11],
  ]),
  19
);

console.log(
  sumIntervals([
    [0, 20],
    [-100000000, 10],
    [30, 40],
  ]),
  100000030
);
console.log(
  sumIntervals([
    [2, 3],
    [2, 6],
    [2, 4],
    [2, 9],
    [2, 5],
  ]),
  7
);
