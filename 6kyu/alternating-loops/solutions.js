// Solution 1
const combine = (...args) => Array(Math.max(...args.map(x => x.length))).fill('').map( (x,y) => args.map((a,b) => a[y])).reduce((a,b) => a.concat(b)).filter(x => x !== undefined)


// Test Cases
console.log(combine(['a', 'b', 'c'], [1, 2, 3]), ['a', 1, 'b', 2, 'c', 3]);
console.log(combine(['a', 'b', 'c'], [1, 2, 3, 4, 5]), ['a', 1, 'b', 2, 'c', 3, 4, 5]);
console.log(combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8]),['a', 1, 6, 8, 'b', 2, 7, 'c', 3, 4, 5]);