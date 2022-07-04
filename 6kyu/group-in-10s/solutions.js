function groupIn10s(...arr) { 
    if (arr.length === 0) return []
    let sorted = arr.sort((a,b) => a - b)

    return Array(Math.floor(Math.floor(Math.max(...arr) / 10) + 1))
        .fill([0])
        .map((x,y) => sorted.splice(0, sorted.filter(a => a < 10 * (y + 1) && a >= 10 * y).length))
        .map(x => x.length === 0 ? undefined : x)

}