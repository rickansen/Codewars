function expandedForm(num) {
    return String(num).split('').map((x,y) => x * (10 ** ((String(num).length - 1) - y))).filter(x => x).join(' + ')
}