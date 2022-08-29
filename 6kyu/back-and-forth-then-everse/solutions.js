function arrange(s) {
    let slice = s.slice(), arr = []
    
    while (slice.length !== 0) {
        arr.push([...slice.splice(0,1)])
        arr.push([...slice.splice(-1,1)])
        slice = slice.reverse()
    }

    return arr.reduce((a,b) => a.concat(b))
}

