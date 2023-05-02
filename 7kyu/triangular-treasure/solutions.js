const triangular = n  => n > 0 ? n*(n+1) / 2: 0

console.log( triangular(2), 3 )
console.log( triangular(4), 10 )
console.log( triangular(5), 15 )
console.log( triangular(6), 21 )
console.log( triangular(7), 28 )
console.log( triangular(8), 36 )
console.log( triangular(9), 45 )
console.log( triangular(10), 55 )
console.log( triangular(-454), 0 )