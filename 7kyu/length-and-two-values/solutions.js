const alternate = (n, firstValue, secondValue) => Array(n).fill(firstValue).map( (x,y) => y%2!==0 ? secondValue : x)

console.log(
    alternate(5, true, false), [true, false, true, false, true])
console.log(
    alternate(20, 'blue', 'red'), ['blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red'])
console.log(
    alternate(0, "lemons", "apples"), [])
