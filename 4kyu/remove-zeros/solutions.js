function removeZeros(array) {
  let nonZero = [],
    zeros = [];

  for (let i = 0; i < array.length; i++) {
    array[i] === 0 || array[i] === '0'
      ? push(zeros, array[i])
      : push(nonZero, array[i]);
  }

  return concat(nonZero, zeros);
}

function push(arr, val) {
  arr[arr.length] = val;
}

function concat(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1[arr1.length] = arr2[i];
  }
  return arr1;
}
