function toUnderscore(string) {
    if (typeof string === 'number') return String(string)
    if (!string || typeof string !== 'string') return ''
    let regex = new RegExp(/[A-Z]/)
    return string.split('').map(x => regex.test(x) ? `_${x.toLowerCase()}` : x).join('').slice(1)
}