const reverseNumber = n => n === 0 ? 0 : n > 0 ? +[...String(n)].reverse().join('') : -[...String(n)].slice(1).reverse().join('')

console.log(
    reverseNumber(123), 321)
console.log(
    reverseNumber(-123), -321, 'Negative Numbers should be preserved')
console.log(
    reverseNumber(1000), 1, 'Should handle numbers ending with "0"')
console.log(
    reverseNumber(4321234), 4321234)
console.log(
    reverseNumber(5), 5)
console.log(
    reverseNumber(0), 0)
console.log(
    reverseNumber(98989898), 89898989)
