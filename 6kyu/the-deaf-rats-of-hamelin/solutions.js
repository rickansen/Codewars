var countDeafRats = function(town) {

    let split = town.split('')
    let left = split.slice(0, town.indexOf('P')).filter(x => x !== ' ')
    let right = split.slice(town.indexOf('P') + 1, town.length).filter(x => x !== ' ')

 
    left = left.map((x,y,z) => z.slice(y * 2, y * 2 + 2).map(a => a)).filter(x => x.length!== 0).map(x => x.join(''))

    right = right.map((x,y,z) => z.slice(y * 2, y * 2 + 2).map(a => a)).filter(x => x.length!== 0).map(x => x.join(''))

    let rats = left.length + right.length

    return rats - (right.filter(x=> x == 'O~').length + left.filter(x=> x == '~O').length)

   
   
}
