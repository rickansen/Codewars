function twosDifference(input) {
  return input
    .map((x, y, z) =>
      [x, z.slice(y + 1, z.length).find((a) => a === x + 2)].sort(
        (a, b) => a - b
      )
    )
    .filter((x) => !x.includes(undefined))
    .sort((a, b) => a[0] - b[0]);
}
