const sumMul = (n, m) =>
  !(m / n) || m / n < 0
    ? 'INVALID'
    : Array(Math.floor((m / n) % 1 === 0 ? (m - 1) / n : m / n))
        .fill(1)
        .map((x, y) => n * (y + 1))
        .reduce((a, c) => a + c);

console.log(sumMul(0, 0), 'INVALID');
console.log(sumMul(2, 9), 20);
console.log(sumMul(4, -7), 'INVALID');
console.log(sumMul(2, 10), 20);
