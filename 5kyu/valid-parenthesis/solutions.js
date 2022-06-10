function validParentheses(parens) {

    while (parens.includes('()')) {
        parens = parens.replace('()', '')
    }
    return parens === '()' || parens === ''

}