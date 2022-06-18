function encode (input) {
    let arr1 = input.map(x => x.split('')).map(x => x[0] === 'A' ? 0 : x[0] === 'T' ? 9 : x[0] === 'J' ? 10 : x[0] === 'Q' ? 11 : x[0] === 'K' ? 12 : +x[0] - 1)
  
    let arr2 = input.map(x => x.split('')).map(x => x[1] === 'c' ? 0 : x[1] === 'd' ? 13 : x[1] === 'h' ? 26 : x[1] = 39)
  
    return arr1.map((x,y) => x + arr2[y]).sort((a,b) => a - b)
}


function decode (input) {
    input = input.sort((a,b) => a - b)
    let split = input.map(x => [Math.floor(x / 13), x - (Math.floor(x / 13) * 13)])
    let arr1 =  split.map(x => x[0] === 0 ? 'c' : x[0] === 1 ? 'd' : x[0] === 2 ? 'h' : 's')
    let arr2 = split.map(x => x[1] + 1).map(x => x === 1 ? 'A' : x === 10 ? "T" : x === 11 ? 'J' : x === 12 ? 'Q' : x === 13 ? 'K' : x)
    return arr2.map((x,y) => String(x).concat(arr1[y]))
}