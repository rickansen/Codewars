function findShort(s){
    return Math.min(...s.split(' ').map(x => x.length))
}

console.log(findShort('Which is the shortest?'))

