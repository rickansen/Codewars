function score( dice ) {
    let sort =  dice.sort()
    let triplet = sort[sort.map((x,y,z) => x === z[y+1]).map((x,y,z) => x === z[y+1] && x === true ? sort[y] : '').findIndex(x => x !== '')]
    let counter = 0
  
    if (dice.length !== 0) {
        if (triplet) {
            if (triplet === 1) {
                counter += 1000
                sort.splice(sort.indexOf(triplet), 3)
                return sort.map(x => x === 1 ? 100 : x === 5 ? 50 : 0).reduce((a,b) => a + b) + counter
            } else if (triplet === 2) {
                counter += 200
                sort.splice(sort.indexOf(triplet), 3)
                return sort.map(x => x === 1 ? 100 : x === 5 ? 50 : 0).reduce((a,b) => a + b) + counter
            } else if (triplet === 3) {
                counter += 300
                sort.splice(sort.indexOf(triplet), 3)
                return sort.map(x => x === 1 ? 100 : x === 5 ? 50 : 0).reduce((a,b) => a + b) + counter
            } else if (triplet === 4) {
                counter += 400
                sort.splice(sort.indexOf(triplet), 3)
                return sort.map(x => x === 1 ? 100 : x === 5 ? 50 : 0).reduce((a,b) => a + b) + counter
            } else if (triplet === 5) {
                counter += 500
                sort.splice(sort.indexOf(triplet), 3)
                return sort.map(x => x === 1 ? 100 : x === 5 ? 50 : 0).reduce((a,b) => a + b) + counter
            } else {
                counter += 600
                sort.splice(sort.indexOf(triplet), 3)
                return sort.map(x => x === 1 ? 100 : x === 5 ? 50 : 0).reduce((a,b) => a + b) + counter
            }
        } else {
            return sort.filter(x => x !== triplet).map(x => x === 1 ? 100 : x === 5 ? 50 : 0).reduce((a,b) => a + b) + counter
        }
    } else {
        return 0
    }

    
   
}