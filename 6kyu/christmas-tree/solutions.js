function christmasTree(height) {
  return Array(height)
    .fill(0)
    .map((x, y) => 2 * y + 1)
    .map(
      (x, y, z) =>
        `${' '.repeat((z[z.length - 1] - x) / 2)}${'*'.repeat(x)}${' '.repeat(
          (z[z.length - 1] - x) / 2
        )}`
    )
    .join('\n');
}
