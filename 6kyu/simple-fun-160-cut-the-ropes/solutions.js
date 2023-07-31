function cutTheRopes(a) {
  let min = 0,
    length = a.length,
    arr = [];

  while (length !== 0) {
    arr.push(length);
    min = Math.min(...a.filter((x) => x));
    a = a.filter((x) => x).map((x) => x - min);
    length = a.filter((x) => x).length;
  }

  return arr;
}
// For a = [3, 3, 2, 9, 7], the result should be [5, 4, 2, 1]

//   3 3 2 9 7   ( 5 left)
// step 1:          1 1 0 7 5   ( 4 left)
// step 2:          0 0 0 6 4   ( 2 left)
// step 3:          0 0 0 0 2   ( 1 left)
// step 4:          0 0 0 0 0
// [5, 4, 2, 1]

console.log(cutTheRopes([3, 3, 2, 9, 7]), [5, 4, 2, 1]);
console.log(cutTheRopes([1, 2, 3, 4, 3, 3, 2, 1]), [8, 6, 4, 1]);
console.log(
  cutTheRopes([
    13035, 6618, 13056, 20912, 1119, 13035, 6618, 6618, 8482, 13056,
  ]),
  [10, 9, 6, 5, 3, 1]
);
