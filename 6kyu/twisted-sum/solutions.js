function twistedSum(n) {
    let result = 0
    for (let i = 1; i <= n; i++) {
        result += i < 10 ? i : String(i).split('').reduce((a,b) => +a + +b, 0)
    }

    return result
}