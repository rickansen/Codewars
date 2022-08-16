var encryptThis = function(text) {
    if (text.length === 1) return String(text.charCodeAt())
    return text.split(' ').map(x => [...x].map((a,b,c) => {
        if (b === 0) {
            return a.charCodeAt()
        } else if (b === 1) {
            return c[c.length-1]
        } else if (b === c.length - 1) {
            return c[1]
        } else {
            return a
        }
    }).join('')).join(' ')
}