function removeParentheses(s){
    s = s.split('')
    let clIndex, opIndex

    while (s.includes('(')) {
        clIndex = s.indexOf(')') 
        opIndex = s.slice(0, clIndex + 1).lastIndexOf('(')
        s.splice(opIndex, clIndex - opIndex + 1).join('')
    }
    return s.join('')
}
