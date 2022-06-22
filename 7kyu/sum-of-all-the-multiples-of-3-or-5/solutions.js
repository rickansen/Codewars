function findSum(n) {
    let arr = []
    let i = 0

    while (i !== n){
        arr.push(1 + i)
        i++
    }
    return arr.filter(x => x % 3 === 0 ? x : x % 5 === 0).reduce((a,b) => a + b, 0)
}