// TODO: implement 'mergesorted'
// test ensures: a and b are both arrays, consisting entirely of integers...
//...,both arrays are sorted and contain at least 1 integer.
// ALSO: the Array.sort function has been disabled for this excercise.

//Solution 1: Wrong sort
function mergesorted(a, b) {
  let all = a.concat(b);
  let push = [];

  for (let i = 0; i < all.length; i++) {
    for (let j = 0; j < all.length; j++) {
      if (all[j] > all[j + 1]) {
        swap(j, j + 1, all);
      }
    }
  }

  return all;
}

function swap(a, b, arr) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
  return arr;
}

//Test Case
console.log(mergesorted([1, 2, 3], [1, 2, 3]), [1, 1, 2, 2, 3, 3]);
console.log(mergesorted([4], [1, 2, 3]), [1, 2, 3, 4]);
