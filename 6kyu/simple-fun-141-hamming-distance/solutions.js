function hammingDistance (a, b) {
    a = (a).toString(2)
    b = (b).toString(2)
    // a = a.length < b.length ? '0'.repeat(b.length - a.length) + a : a
    // b = b.length < a.length ? '0'.repeat(a.length - b.length) + b : b
    a = notation(a,b)[0]
    b = notation(a,b)[1]
    return [...a].map( (x,y) => x === [...b][y] ).filter( x => x).length
}

function notation (a,b) {
    let size = a.length > b.length ? Math.ceil(a.length / 8) : Math.ceil(b.length / 8)

    a = '0'.repeat(size * 8 - a.length) + a
    b = '0'.repeat(size * 8 - b.length) + b

    return [a,b]
}

console.log(hammingDistance(25, 87), 4)
console.log(hammingDistance(256, 302), 4)
console.log(hammingDistance(543, 634), 4)
console.log(hammingDistance(34013, 702), 7)