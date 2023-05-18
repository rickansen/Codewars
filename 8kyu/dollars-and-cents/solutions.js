//Solution 1
//const formatMoney = amount => amount%1 === 0 ? `$${amount}.00` : amount * 10 % 1 === 0 ? `$${amount}0` : `$${amount}`

// Solution 2
const formatMoney = amount => `$${amount.toFixed(2)}`

console.log(formatMoney(39.99), '$39.99');
console.log(formatMoney(3), '$3.00');
console.log(formatMoney(3.1), '$3.10');
