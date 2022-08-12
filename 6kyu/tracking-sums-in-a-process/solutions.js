function trackSum(arr) {
    let arr1 = []

    arr1.push(arr)
    arr1.push( [...new Set(arr)] )
    arr1.push(arr1[1].slice().sort((a,b) => b - a).map((x,y,z) => y === z.length -1 ? '' : x - z[y+1]).filter(x => x))
    arr1.push( [...new Set(arr1[2])] )

    return [arr1.map(x => x.reduce((a,b) => a + b)), arr1[3]]
}
