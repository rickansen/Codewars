function selNumber(n, d) {
    let arr = []

    for (let i = 12; i <= n; i++) {
        arr.push( `${i}` .split('') .reverse() .map(x => Number(x)) )
    }

    return arr.filter((x) => x.length == new Set(x).size)
        .filter((x,y,z) => x.map( (a,b,c) => c[b] > c[b + 1])
            .slice(0, x.length -1)
            .every(x => x == true))
        .filter(x => x.map((a,b,c) => c[b] - c[b + 1])
            .slice(0, x.length -1)
            .every(x => x <= d) )
        .map(x => Number(x.reverse().join(''))).length

}