function oddRow(n) {
  let stack = 0;
  for (let i = 0; i < n; i++) {
    stack += i;
  }
  return Array(n)
    .fill(stack + 1)
    .map((x, y) => (x + y) * 2 - 1);
}
