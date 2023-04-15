const sumOfMinimums = arr => arr.map(x => Math.min(...x)).reduce((a,b) => a+b)


console.log(
    sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]), 9);
console.log(
    sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]), 76);
