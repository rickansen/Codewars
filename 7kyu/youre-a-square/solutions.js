/*
    Perfect square: is a number that be written as the product of two identical numbers
    0 = 0 * 0
    1 = 1 * 1
    2 
    3
    4 = 2 * 2
    5
    6
    7
    8
    9 = 3 * 3
*/

var isSquare = function(n){
  for (let i = 0; i <= Math.sqrt(n); i++) {
    if (i * i === n) return true;
  }
  return false;
}

console.log(isSquare(-1), false);
console.log(isSquare( 0), true);
console.log(isSquare( 3), false);
console.log(isSquare( 4), true);
console.log(isSquare(25), true);
console.log(isSquare(26), false);