function findNextPower(val, pow_) {
    return Math.pow(Math.ceil(Math.pow(val+1, 1/pow_)),pow_) 
}

console.log(findNextPower(8, 3), 27)
console.log(findNextPower(12385, 3), 13824)
console.log(findNextPower(1245678, 5), 1419857)
console.log(findNextPower(1245678, 6), 1771561)
console.log(findNextPower(4782969, 7), 10000000)