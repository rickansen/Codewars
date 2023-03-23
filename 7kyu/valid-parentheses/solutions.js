function validParentheses(str) {
    while (str.includes('()')) str = str.replace('()', '')
    return str.length === 0
}

console.log(validParentheses("()"), true);
console.log(validParentheses("((()))"), true);
console.log(validParentheses("()()()"), true);
console.log(validParentheses("(()())()"), true);
console.log(validParentheses("()(())((()))(())()"), true);