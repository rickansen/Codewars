function code(strng) {
    return strng.split('').map(x => (+x).toString(2)).map(x => ('0').repeat((x.length - 1)).concat(1).concat(x)).join('')
}

function decode(str) {
    str = str.split('')
    let arr = []
    while (str.length !== 0) {
        if (str[0] === '1') {
            arr.push(str.splice(0,2))
        } else {
            arr.push(str.splice(str.indexOf('0'), ((str.indexOf('1') - str.indexOf('0')) + 1) * 2))
        }
    }
    return arr.map(x => x[0] !== '1' ? parseInt(x.slice(x.length / 2).join(''), 2) : x[1] == 0 ? 0 : 1).join('')
}
