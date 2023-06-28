// Solution 1: Works but not enough for performance tests
const findNumber = array => array.includes(1) ? array.sort((a,b) => a - b).find((x,y,z) => x + 1 !== z[y+1]) + 1 : 1

console.log(findNumber([1, 3, 4, 5, 6, 7, 8]), 2);
console.log(findNumber([7, 8, 1, 2, 4, 5, 6]), 3);
console.log(findNumber([1, 2, 3, 5]), 4);
console.log(findNumber([1, 3]), 2);
console.log(findNumber([2, 3, 4]), 1);
console.log(findNumber([13, 11, 10, 3, 2, 1, 4, 5, 6, 9, 7, 8]), 12);
console.log(findNumber([1, 2, 3]), 4);
