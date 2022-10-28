function catMouse(x, j){
    const c = x.indexOf('C')
    const d = x.indexOf('D')
    const m = x.indexOf('m')
    const reverse = [...x].reverse('').join('')
    const range = c < m ? x.slice(c,m+1).slice(0,j+1) : reverse.slice(reverse.indexOf('C'), reverse.indexOf('m') +1).slice(0, j+1)

    if (!x.includes('C') || !x.includes('D') || !x.includes('m') ) return "boring without all three"
    if ([...range].filter(x => x !=='.').length === 3 ) return "Protected!"
    if (!range.includes('m') ) return "Escaped!"
    
    return "Caught!"
}

