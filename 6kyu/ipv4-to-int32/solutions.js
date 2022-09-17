const ipToInt32 = (ip) =>
  parseInt(
    ip
      .split('.')
      .map((x) => (+x).toString(2))
      .map((x) => (x.length === 8 ? x : '0'.repeat(8 - x.length).concat(x)))
      .reduce((a, b) => a + b),
    2
  );
