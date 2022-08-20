function alphabetWar(fight) {
    let obj = {
        'w' : 4,
        'p': 3,
        'b': 2,
        's': 1,
        'm' : -4,
        'q': -3,
        'd': -2,
        'z': -1
    }

    let val = [...fight].map((x,y,z) => z[y+1] === '*' || z[y-1] === '*' || x === '*' ? '' : x).map(x => obj[x]).filter(x => x)
    let left = val.filter(x => x > 0).length > 0 ? val.filter(x => x > 0).reduce((a,b) => a + b) : 0
    let right= val.filter(x => x < 0).length > 0 ? val.filter(x => x < 0).reduce((a,b) => a + b) : 0

    return left > Math.abs(right) ? "Left side wins!" : left < Math.abs(right) ? "Right side wins!" : "Let's fight again!"
}