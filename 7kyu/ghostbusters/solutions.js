function ghostBusters(building) {
    let str = building.split('')
    let filt = str.filter(x => x !== ' ').join('')
    return str.length !== filt.length ? filt : "You just wanted my autograph didn't you?"
}