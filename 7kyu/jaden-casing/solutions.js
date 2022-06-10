String.prototype.toJadenCase = function () {
    let caps = this.split(' ').map(x => x.split('')).map(x => x[0].toUpperCase())

    let newArr =[]

    let lows = this.toUpperCase().split(' ').map(x=> x.split('')).map(x => x.join('').substring(1).toLowerCase())

    for (let i = 0; i < caps.length; i++) {
        newArr.push(caps[i].concat(lows[i]))
    }

    return newArr.join(' ')
};