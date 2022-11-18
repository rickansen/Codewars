// Stupid fucking solution,, Im sleepy

function rotate(array, n) {
  let array2 = array.every((x) => typeof x === 'number')
    ? array.sort((a, b) => a - b)
    : array.every((x) => typeof x === 'string')
    ? array.sort()
    : array;
  if (n >= 0) {
    for (let i = 0; i < n; i++) {
      array2.unshift(array2.pop());
    }
  } else {
    for (let i = 0; i < Math.abs(n); i++) {
      array2.splice(array2.length - 1, 1, array2.shift());
    }
  }

  return array2;
}

// Test Case
var data = [1, 2, 3, 4, 5];

console.log(rotate(data.slice(), 1), [5, 1, 2, 3, 4]);
console.log(rotate(data.slice(), 2), [4, 5, 1, 2, 3]);
console.log(rotate(data.slice(), 3), [3, 4, 5, 1, 2]);
console.log(rotate(data.slice(), 4), [2, 3, 4, 5, 1]);
console.log(rotate(data.slice(), 5), [1, 2, 3, 4, 5]);

console.log(rotate(data.slice(), 0), [1, 2, 3, 4, 5]);

console.log(rotate(data.slice(), -1), [2, 3, 4, 5, 1]);
console.log(rotate(data.slice(), -2), [3, 4, 5, 1, 2]);
console.log(rotate(data.slice(), -3), [4, 5, 1, 2, 3]);
console.log(rotate(data.slice(), -4), [5, 1, 2, 3, 4]);
console.log(rotate(data.slice(), -5), [1, 2, 3, 4, 5]);

console.log(rotate(['a', 'b', 'c'], 1), ['c', 'a', 'b']);
console.log(rotate([1.0, 2.0, 3.0], 1), [3.0, 1.0, 2.0]);
console.log(rotate([true, true, false], 1), [false, true, true]);

console.log(rotate([5, 1, 2, 3, 4], 2), [4, 5, 1, 2, 3]);
