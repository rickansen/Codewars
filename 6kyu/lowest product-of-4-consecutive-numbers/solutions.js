function lowestProduct(input) {
  if (input.length < 4) return 'Number is too small';
  return Math.min(
    ...Array(input.length - 3)
      .fill(1)
      .map((x, y) => input.slice(y, y + 4))
      .map((x) => [...x].reduce((a, b) => +a * +b, 1))
  );
}
