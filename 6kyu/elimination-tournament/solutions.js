const tourney = array => {
    let temp = array.slice(0)
    let temp2 = array.slice(0)

    let res = []

    res.push(temp)

    while (temp2.length !== 1) {
        let comp = []
     
        for (let i = 0; i < temp2.length / 2; i++) {
        
            if (temp2.length % 2 === 0) {
                comp.push(Math.max(...temp2.slice(i*2, i*2+2)))
            } else {
                let end = temp2[temp2.length - 1]
                comp.push(end)
                temp2 = temp2.slice(0, temp2.length - 1)
                comp.push(Math.max(...temp2.slice(i*2, i*2+2)))
               
            }
        }
        temp2 = comp
        res.push(temp2)
    
    }
    return res
}


console.log( tourney(
    [40,68,53,61,16,28]),
    [ [ 40, 68, 53, 61, 16, 28 ], [ 68, 61, 28 ], [ 28, 68 ], [ 68 ] ])    
    
console.log( tourney(
    [9, 5, 4, 7, 6, 3, 8, 2]),
    [[9, 5, 4, 7, 6, 3, 8, 2], 
    [9, 7, 6, 8],
    [9, 8],
    [9]])

console.log( tourney(
    [9, 5, 4, 7, 6, 3, 8]),
    [[9, 5, 4, 7, 6, 3, 8], 
    [8, 9, 7, 6], 
    [9, 7],
    [9]])    