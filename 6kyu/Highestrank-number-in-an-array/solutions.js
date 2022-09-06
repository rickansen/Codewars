function highestRank(arr){
    let instance = Array.from(new Set(arr)).map(x => [x, arr.filter(a => a === x).length])
    let max = Math.max(...instance.map(x => x[1]))
    let maxArr = instance.filter(x => x[1] === max)
    return Math.max(...maxArr.map(x => x[0]))
}
