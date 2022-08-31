function ipsBetween(start, end){
    let startVal = start.split('.').map(x => Number(x).toString(2)).map((x,y,z) => x.length == 8 ? x : '0'.repeat(8 - z[y].length).concat(z[y])).join('')
    let endVal = end.split('.').map(x => Number(x).toString(2)).map((x,y,z) => x.length == 8 ? x : '0'.repeat(8 -z[y].length).concat(z[y])).join('')

    return Math.abs(parseInt(startVal,2) - parseInt(endVal,2))
}