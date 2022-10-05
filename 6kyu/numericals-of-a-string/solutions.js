function numericals(s) {
  const instance = Array.from(new Set(s)).map((x) => [x, 0]);
  return [...s].map((x) => (instance.find((a) => a[0] === x)[1] += 1)).join('');
}
