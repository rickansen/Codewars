const numberJoy = n => String(n).length === 1 || [...String(n)].reduce((a,b) => +a + +b, 0)  * +[...String([...String(n)].reduce((a,b) => +a + +b, 0))].reverse().join('') === n


console.log(numberJoy(1997), false)
console.log(numberJoy(1998), false)
console.log(numberJoy(1729), true)
console.log(numberJoy(18), false)
console.log(numberJoy(1), true)
console.log(numberJoy(81), true)
console.log(numberJoy(1458), true)