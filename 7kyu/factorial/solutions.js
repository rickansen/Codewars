const factorial = n => n === 0 ? 1 : n === 1 ? 1 : Array(n).fill(1).map( (x,y) => y + 1).reduce((a,b) => a * b, 1)


console.log(factorial(0), 1);
console.log(factorial(1), 1);
console.log(factorial(4), 24);
console.log(factorial(7), 5040);
console.log(factorial(17), 355687428096000);