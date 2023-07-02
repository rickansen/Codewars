const findHack = (arr) =>
  arr
    .map((x) =>
      x[2]
        .map((a) => (/[^ABCD]/.test(a) ? 0 : { A: 30, B: 20, C: 10, D: 5 }[a]))
        .reduce((a, b) => a + b)
    )
    .map((x, y, z) =>
      arr[y][2].length >= 5
        ? arr[y][2].every((a) => a === 'A' || a === 'B')
          ? x + 20
          : x
        : x
    )
    .map((x, y, z) => (arr[y][1] !== x ? arr[y][0] : ''))
    .filter((x) => x);

console.log(
  findHack([
    ['name1', 150, ['B', 'A', 'A', 'C', 'A', 'A']],
    ['name2', 120, ['B', 'A', 'A', 'A']],
    ['name3', 160, ['B', 'A', 'A', 'A', 'A']],
    ['name4', 140, ['B', 'A', 'A', 'C', 'A']],
  ]),
  ['name2', 'name4']
);
