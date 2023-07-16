const stairs = (n) =>
  Array(n)
    .fill(1)
    .map((x, y) =>
      Array(y + 1)
        .fill(x)
        .map((a, b) => (a + b) % 10)
    )
    .map((x) => x.concat(x.slice().reverse()).join(' '))
    .map((x, y) => ' '.repeat((n - 1 - y) * 4) + x)
    .join('\n');

console.log(stairs(3), '        1 1\n    1 2 2 1\n1 2 3 3 2 1');
console.log(
  stairs(7),
  '                        1 1\n                    1 2 2 1\n                1 2 3 3 2 1\n            1 2 3 4 4 3 2 1\n        1 2 3 4 5 5 4 3 2 1\n    1 2 3 4 5 6 6 5 4 3 2 1\n1 2 3 4 5 6 7 7 6 5 4 3 2 1'
);
console.log(stairs(12), '        1 1\n    1 2 2 1\n1 2 3 3 2 1');
