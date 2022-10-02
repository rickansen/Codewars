function solve(arr) {
  const values = Array.from(new Set(arr));
  const repeat = values.map((x) => [x, arr.filter((a) => a === x).length]);
  const sets = Array.from(new Set(repeat.map((x) => x[1])));
  return Array(sets.length)
    .fill('')
    .map((x, y) => repeat.filter((a, b) => sets[y] === a[1]))
    .sort((a, b) => b[0][1] - a[0][1])
    .map((x) => x.sort((a, b) => a[0] - b[0]))
    .reduce((a, b) => a.concat(b))
    .map((x) => Array(x[1]).fill(x[0]))
    .reduce((a, b) => a.concat(b));
}
