const eliminateUnsetBits = number => parseInt(number.split('').filter(x => +x).join(''), 2) || 0


console.log(eliminateUnsetBits("11010101010101"),  255)
console.log(eliminateUnsetBits("111"),  7)
console.log(eliminateUnsetBits("1000000"), 1)
console.log(eliminateUnsetBits("000"), 0)