// Solution 1: OK
function arraysSimilar(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  const sort = [arr1, arr2].map((x) => x.sort((a, b) => a - b));
  return sort[0].every((x, y) => x === sort[1][y]);
}

//Test Cases
console.log(arraysSimilar([1, 2, 2, 3, 4], [2, 1, 2, 4, 3]), true);
console.log(arraysSimilar([2, 1, 2, 4, 3], [1, 2, 3, 4]), false);
console.log(arraysSimilar([1, 2, 3, 4], [1, 2, 3, '4']), false);
