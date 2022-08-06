function arrayDepth(array) {

    if (!array || array.length === 1 || array.length === 0) return 1
    let counter = 1

    while (array.some(x => typeof x === 'object')) {
       array = array.reduce((a, b) => a.concat(b), [])
        counter++
    }

    return  counter
}
