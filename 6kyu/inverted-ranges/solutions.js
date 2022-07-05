function invertedRanges(ranges) {
    if (ranges.length === 0) return [[0,100]]
    else if (ranges.map(x => x[1] - x[0] ).reduce((a,b) => a + b) + ranges.length - 1 === 100) return []

    if (ranges.length === 1) {
        return ranges.map((x,y) => x.map((a,b) => b === 0 ? [0,x[0] - 1] : [x[1] + 1, 100]))[0]
    }  else {
        return ranges.map(x => x[0])[0] === 0 ? ranges.map((x,y,z) => y !== ranges.length - 1 ? [x[1] +1, z[y+1][0] - 1] : [x[1] +1, 100]).filter(x => x[0]<= x[1]) : [[0, ranges[0][0] - 1]].concat(ranges.map((x,y,z) => y !== ranges.length - 1 ? [x[1] +1, z[y+1][0] - 1] : [x[1] +1, 100]).filter(x => x[0]<= x[1]))
    }
}