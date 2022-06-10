function amIWilson(p) {
    let arr = []
    for (let i = 1; i < p; i++) {
        arr.push(i)
    }
    let factorial = arr.filter(x => x !== 0).reduce((a,b) => a * b, 1)

    return ((factorial + 1) / (p * p)) % 1 === 0

}