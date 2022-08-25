function validBraces(braces){
    let num = [
        [...braces].filter(x => x === '(').length === [...braces].filter(x => x === ')').length, 
        [...braces].filter(x => x === '[').length === [...braces].filter(x => x === ']').length,
        [...braces].filter(x => x === '{').length === [...braces].filter(x => x === '}').length
    ]

    if (num.some(x => x === false)) return false

    while (braces.includes('()') || braces.includes('[]') || braces.includes('{}')) {
        braces = braces.replace(/((\(\))|(\{\}))|(\[\])/g, '')
    }
    return braces.length === 0 ? true : false
}
