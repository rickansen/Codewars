const isPythagoreanTriple = integers => integers.sort((a,b) => a - b).slice(0,2).map(x => x ** 2).reduce((a,b) => a + b) === Math.max(...integers) ** 2


console.log(isPythagoreanTriple([3, 4, 5]), true);
console.log(isPythagoreanTriple([3, 5, 9]), false);