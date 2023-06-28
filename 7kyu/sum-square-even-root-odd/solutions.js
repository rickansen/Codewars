const sumSquareEvenRootOdd = ns => +ns.map(x => x % 2 === 0 ? x ** 2 : Math.sqrt(x)).reduce((a,b) => a + b).toFixed(2)

console.log(sumSquareEvenRootOdd([4,5,7,8,1,2,3,0]), 91.61)
console.log(sumSquareEvenRootOdd([1,14,9,8,17,21]), 272.71)
