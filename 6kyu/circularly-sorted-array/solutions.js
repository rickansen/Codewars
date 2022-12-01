// solution 1
function isCircleSorted(arr) {
  let splitIn = arr.findIndex((x, y) => x > arr[y + 1]);
  if (splitIn === -1) return true;
  let invertIn =
    arr.slice(splitIn).findIndex((x, y) => x < arr[splitIn]) + splitIn;
  let circulate = arr.slice(invertIn).concat(arr.slice(0, splitIn + 1));
  return circulate.findIndex((x, y) => x > circulate[y + 1]) === -1;
}

// Test Cases
console.log(isCircleSorted([2, 3, 4, 5, 6]), true);
console.log(isCircleSorted([6, 2, 3, 4, 5]), true);
console.log(isCircleSorted([3, 2, 4, 5, 6]), false);
console.log(isCircleSorted([5, 6, 54, 435, 888, 99, -8, 1, 2]), false);
console.log(isCircleSorted([12, 24, 22, 27, 29, 0, 4]), false);
console.log(isCircleSorted([2, 3, 4, 3]), false);
