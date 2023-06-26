function halvingSum(n) {
    let result = n
    while (n > 1) {
        result+=  Math.floor(n / 2)
        n =  Math.floor(n / 2) 
    }

    return result
}


console.log(halvingSum(25),47);
console.log(halvingSum(127),247);