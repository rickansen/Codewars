function kebabize(str) {

    let regex = new RegExp(/[^a-z]/i)
    let regex1 = new RegExp(/[A-Z]/)

    while ([...str].map(x => regex.test(x)).some(x => x === true)) {
        str = str.replace(regex, '')
    }
    str = [...str].map(x => regex1.test(x) ? `-${x.toLowerCase()}` : x).filter(x => x).join('')

    return str[0] === '-' ? str.slice(1) : str
}

