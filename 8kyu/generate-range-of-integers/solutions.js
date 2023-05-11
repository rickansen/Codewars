const generateRange = (min, max, step) => Array(~~((max - min) / step) + 1).fill(min).map( (x,y) => x + step * y)

console.log(generateRange(2, 10, 2), [2,4,6,8,10]) 
console.log(generateRange(1, 10, 3), [1,4,7,10]) 
console.log(generateRange(1, 10, 4), [1,5,9]) 