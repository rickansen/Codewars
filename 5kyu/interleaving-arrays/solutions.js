//First Version
function interleave(...arr) {
  if (arr.length === 1 && arr[0].length === 0) return [];

  const length = Math.max(...arr.map((x) => x.length));

  arr = arr.map((x) =>
    x.length !== length
      ? Array(length)
          .fill(null)
          .map((a, b) => x[b])
          .map((a) => (typeof a === 'undefined' ? null : a))
      : x
  );

  return arr[0]
    .map((x, y) => [x].concat(arr.slice(1).map((a) => a[y])))
    .reduce((a, b) => a.concat(b));
}

// Test Case
console.log(interleave([1, 2, 3], ['c', 'd', 'e']), [1, 'c', 2, 'd', 3, 'e']);
console.log(interleave([1, 2, 3], [4, 5]), [1, 4, 2, 5, 3, null]);
console.log(
  interleave([1, 2, 3], [4, 5, 6], [7, 8, 9]),
  [1, 4, 7, 2, 5, 8, 3, 6, 9]
);
console.log(interleave([]), []);
