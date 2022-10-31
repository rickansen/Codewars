var getNum = function (n) {
  const holes = {
    0: 1,
    6: 1,
    8: 2,
    9: 1,
  };
  return [...String(n)]
    .filter((x) => x == 0 || x == 6 || x == 8 || x == 9)
    .map((x) => holes[x])
    .reduce((a, b) => a + b, 0);
};
