function fibonacci(n) {
  if (n <= 0) return [];
  let init = [0, 1];
  for (let i = 0; i < n - 2; i++) {
    init.push(init.slice(i).reduce((a, b) => a + b));
  }
  return init;
}
