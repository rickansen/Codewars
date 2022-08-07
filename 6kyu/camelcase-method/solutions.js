String.prototype.camelCase=function(){
    if (this.length === 0) return ''

    let split = this.trim()
    split = split.split(' ')

    return split.map(x => x[0].toUpperCase().concat(x.slice(1))).join('')
}