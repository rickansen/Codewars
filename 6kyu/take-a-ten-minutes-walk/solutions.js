function isValidWalk(walk) {
    if (walk.length === 10) {
        let ns = walk.map(x => x === 'n' ? 1 : x === 's' ? -1 : x ).filter(x => typeof x === 'number').reduce((a,b) => a + b, 0)
        let ew = walk.map(x => x === 'e' ? 1 : x === 'w' ? -1 : x ).filter(x => typeof x === 'number').reduce((a,b) => a + b, 0)
        return ns === 0 && ew === 0 
    } else {
        return false
    }
}