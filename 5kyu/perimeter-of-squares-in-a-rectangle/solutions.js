function perimeter(n) {
  let arr = [1, 1, 2, 3, 5, 8];

  for (let i = 0; i < n - 5; i++) {
    arr.push(arr.slice(-2).reduce((a, b) => a + b, 0));
  }

  return arr.slice(0, n + 1).reduce((a, b) => a + b, 0) * 4;
}
