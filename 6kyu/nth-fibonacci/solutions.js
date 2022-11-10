function nthFibo(n) {
  let fib = [0, 1];
  for (let i = 0; i < n - 1; i++) {
    fib.push(fib.slice(i, i + 2).reduce((a, b) => a + b));
  }
  return fib[n - 1];
}
