// Flop Solution
function rowSumOddNumbers(n) {
    if (n === 1) return 1
    return Array(n).fill( ( n ** 2) - ( n - 1 ) ).map( (x,y) => x + (y * 2) ).reduce((a,b) => a + b)
}