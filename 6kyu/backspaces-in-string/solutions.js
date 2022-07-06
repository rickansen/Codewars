function cleanString(s) {
    let split = s.split('')

    while (split.includes('#')) {
        split[0] === '#' ? split.shift() : split.splice(split.indexOf('#') - 1, 2)
    }

    return split.join('')
}