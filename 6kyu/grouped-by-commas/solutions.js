const groupByCommas = (n) =>
  [...String(n)]
    .reverse()
    .map((x, y) => (y !== 0 && y % 3 === 0 ? `${x},` : x))
    .reverse()
    .join('');
