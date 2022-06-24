function mean(town, strng) {
    
    let dates = strng.split('\n').map(x => x.split(':')).filter(x => x.includes(town))

    if (dates.length !== 0) {
        dates = dates[0][1]
        let nums = dates.split(',').map(x => +(x.slice(4)))
        return nums.reduce((a,b) => a + b) / 12
    } else {
        return -1
    }
   
}

function variance(town, strng) {
    let nums = strng.split('\n').map(x => x.split(':')).filter(x => x.includes(town))

    if (nums.length !== 0) {
        nums = nums [0][1].split(',').map(x => +(x.slice(4)))
        return nums.map(x => Math.abs(x - mean(town, strng))**2 ).reduce((a,b) => a + b) / 12
    } else {
        return -1
    }
}