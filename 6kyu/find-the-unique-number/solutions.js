function findUniq(arr) {
    let repeat = arr.filter((x,y) => arr.indexOf(x) !== y)
    return arr.filter((x)=> x !== repeat[0])[0]
}