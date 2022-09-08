function reverse(str){
    if ([...str].every(x => x === ' ')) return ''
    return str.split(' ').filter(x => x !== ' ').map( (x,y) => y % 2 === 0 ? x : [...x].reverse().join('') ).join(' ')
}