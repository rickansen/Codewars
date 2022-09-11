const pyramid = (n) =>
  Array(n)
    .fill([1])
    .map((x, y) => Array(y + 1).fill(1));
