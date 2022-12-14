const sequenceSum = (begin, end, step) => {
    let arr = []
    for (let i = begin; i <= end; i += step) {
        arr.push(i)
    }
    return arr.reduce((a,b) => a + b, 0)
};

console.log(sequenceSum(2, 6, 2), 12)
console.log(sequenceSum(1, 5, 1), 15)
console.log(sequenceSum(1, 5, 3), 5)  
