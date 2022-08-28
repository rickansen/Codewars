function pairOfShoes(shoes) {
    if (shoes.length === 1 || shoes.length % 2 !== 0) return false
    let sizes = Array.from(new Set(shoes.map(x=> x[1])))
    let group = sizes.map(x => shoes.filter(a => a[1] === x))
    let types = group.map( x => x.map(a => a[0]))
    return group.map(x => x.map(a => a[0]).filter(a => a === 0).length === x.map(a => a[0]).filter(a => a === 1).length).every(x => x === true)
}
