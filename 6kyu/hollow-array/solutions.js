function isHollow(x){
    let rev = x.slice().reverse()

    if (x.includes(0)) {
        if (x.every(a => a === 0) && x.filter(a => a ===0).length >= 3) {
            return true
        } else if (x.filter(a => a ===0).length >= 3) {
            let mid = x.slice(x.indexOf(0),-(rev.indexOf(0)))
            if (mid.every(a => a === 0) && mid.length >= 3) {
                return x.slice(0, x.indexOf(0)).length === x.slice(0, rev.indexOf(0)).length
            } else {
                return false
            }
        } else {
            return false
        }
    } else {
        return false
    }
}