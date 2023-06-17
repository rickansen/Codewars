const fizzbuzz = n => Array(n).fill('').map( (x,y) => y+1).map(x => x % 3 === 0 && x % 5 === 0? 'FizzBuzz': x % 3 === 0 ? 'Fizz': x % 5 === 0 ? 'Buzz' : x)

console.log(fizzbuzz(3),  [1, 2, "Fizz"])