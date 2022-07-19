function collatz(n){
    let arr = [n]

    while (arr[arr.length - 1] !== 1){
        n % 2 === 0 ? arr.push(n /= 2) : arr.push(n = 3 * n + 1)
    }
    return arr.join('->')
}