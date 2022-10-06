const isAlt = (word) =>
  [...word]
    .map((x, y) => (/[aeiou]/.test(x) ? 0 : 1))
    .every((x, y, z) => x !== z[y + 1]);
