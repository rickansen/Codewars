const binaryPyramid = (m, n) =>
  Array(n - m + 1)
    .fill(m)
    .map((x, y) => (x + y).toString(2))
    .reduce((a, b) => a + +b, 0)
    .toString(2);

console.log(binaryPyramid(1, 4), '1111010', 2);
console.log(binaryPyramid(1, 6), '101001101', 2);
console.log(binaryPyramid(6, 20), '1110010110100011', 2);
console.log(binaryPyramid(21, 60), '1100000100010001010100', 2);
