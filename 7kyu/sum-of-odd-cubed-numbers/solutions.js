const cubeOdd = arr => arr.some(x => typeof x !== 'number') ? undefined : arr.filter(x => Math.abs(x) % 2 === 1).reduce((a,b) => a + (b ** 3), 0)

console.log(cubeOdd([1, 2, 3, 4]), 28);
console.log(cubeOdd([-3,-2,2,3]), 0);
console.log(cubeOdd(["a",12,9,"z",42]), undefined);
