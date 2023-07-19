function firstNSmallest(array, n) {
  let arr = [],
    ref = array
      .slice()
      .sort((a, b) => a - b)
      .slice(0, n),
    min = 0,
    arr1 = ref.map((x) => array.indexOf(x));

  for (let i = 0; i < n; i++) {
    min = Math.min(...arr1);
    arr.push(array[min]);
    arr1[arr1.indexOf(min)] = array.length;
  }

  return arr;
}

console.log(firstNSmallest([1, 2, 3, 4, 5], 3), [1, 2, 3]);
console.log(firstNSmallest([5, 4, 3, 2, 1], 3), [3, 2, 1]);
console.log(firstNSmallest([1, 2, 3, 1, 2], 3), [1, 2, 1]);
console.log(firstNSmallest([1, 2, 3, -4, 0], 3), [1, -4, 0]);
console.log(firstNSmallest([1, 2, 3, 4, 5], 0), []);
console.log(firstNSmallest([1, 2, 3, 4, 5], 5), [1, 2, 3, 4, 5]);
console.log(firstNSmallest([1, 2, 3, 4, 2], 4), [1, 2, 3, 2]);
console.log(firstNSmallest([2, 1, 2, 3, 4, 2], 2), [2, 1]);
console.log(firstNSmallest([2, 1, 2, 3, 4, 2], 3), [2, 1, 2]);
console.log(firstNSmallest([2, 1, 2, 3, 4, 2], 4), [2, 1, 2, 2]);
