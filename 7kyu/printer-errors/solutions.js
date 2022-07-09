function printerError(s) {
    let regex = new RegExp(/[a-m]/)
    return `${s.split('').map(x => regex.test(x)).filter(x => x === false).length}/${s.length}`
}