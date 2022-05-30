function validSolution(board){
    let hor = board.map(x => new Set(x)).map(x => x.size).every(x => x === 9)

    let arr = []
    let vert = []

    for (let i = 0; i < 9; i++) {
        for (let x = 0; x < 9; x++) {
            arr.push(board[x][i])
            
        }
    }

    for (let i = 0; i < 9; i++) {
        vert.push(arr.splice(0, 9))
    }
    
    vert = vert.map(x => new Set(x)).map(x => x.size).every(x => x === 9)

    let all = board.join(',').split(',')
    

    for (let i = 0; i < 9; i++) {
        for (let x = 0; x < 3; x++) {
            arr.push(all.splice(0,3))
            
        }
    }

    let blocks = [arr[0].concat(arr[3]).concat(arr[6]),arr[1].concat(arr[4]).concat(arr[7]), arr[2].concat(arr[5]).concat(arr[8]), arr[9].concat(arr[12]).concat(arr[15]), arr[10].concat(arr[13]).concat(arr[16]), arr[11].concat(arr[14]).concat(arr[17]), arr[18].concat(arr[21]).concat(arr[24]), arr[19].concat(arr[22]).concat(arr[25]), arr[20].concat(arr[23]).concat(arr[26])]

    blocks = blocks.map(x => new Set(x)).map(x => x.size).every(x => x === 9)

    if (board.join(',').split(',').map(x => Number(x)).includes(0)) {
        return false 
    } else if ((blocks === true) && (vert === true) && (hor === true)) {
        return true
    } else {
        return false
    }

    
}