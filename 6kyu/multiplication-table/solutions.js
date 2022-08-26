multiplicationTable = (size) =>
  Array(size)
    .fill(Array(size).fill(0))
    .map((x, y) => x.map((a, b) => (y + 1) * (b + 1)));
