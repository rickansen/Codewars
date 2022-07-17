function encode(str) {
    return [...str.toLowerCase()]
        .map(x => x.charCodeAt() - 96)
        .map(x => x > 0 ? [ x % 3 === 0 ? 3 : x % 3, Math.ceil(x/3) % 3 === 0 ? 3 : Math.ceil(x/3) % 3, Math.ceil(x / 9)] : [3,3,3])
        .map(x => x.map(a => '.'.repeat(a)).join(' ')).join(' ')
}


function decode(str) {
    str = str.split(' ')
    return Array(str.length / 3)
        .fill(0)
        .map(x => str.splice(0,3).map(a => a.length).map((a,b) => b === 0 ? a : b === 1 ? (a-1) * 3 : (a-1) * 9).reduce((a,b) => a+ b)).map(x => x !== 27 ? String.fromCharCode(x + 96) : ' ').join('').toUpperCase()
}