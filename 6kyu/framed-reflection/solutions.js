function mirror(text){
    let height = text.split(' ').length
    let width = Math.max(...text.split(' ').map(x => x.length))
    let texts = text.split(' ').map(x => `* ${x.split('').reverse().join('')}${' '.repeat(width - x.length + 1)}*`)
    let border = ['*'.repeat(width + 4)]
    return border.concat(texts).concat(border).join('\n')
}


  