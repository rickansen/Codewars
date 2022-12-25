// Solution 1: Messy
function vowelBack(s) {
    s = [...s].map( (x,y) => {

        let code = [x, x.charCodeAt() - 96]
        let temp = code.slice(0)
        let vowel = /[aiu]/
        let taken = /[^code]/

        if (code[0] === 'c' || code[0] === 'o') {
            code[1]-= 1
        } else if (code[0] === 'd') {
            code[1]-= 3
        } else if (code[0] === 'e') {
            code[1]-= 4
        }

        if (vowel.test(code[0]) && taken.test(code[0])) {
            code[1]-= 5
        } else if (!vowel.test(code[0]) && taken.test(code[0])) {
            code[1]+= 9
        }

        code[1] = code[1] < 0 ? 26 + code[1] : code[1] > 26 ? code[1] % 26 : code[1]
        code[0] = String.fromCharCode(code[1] + 96)
        code[0] === 'c' ||  code[0] === 'o' || code[0] === 'd' || code[0] === 'e' ? code = temp : ''

        return code
    })

    return s.map(x => x[0]).join('')
}

// Test Cases
console.log(vowelBack("testcase"), "tabtbvba");
console.log(vowelBack("codewars"), "bnaafvab");
console.log(vowelBack("exampletesthere"), "agvvyuatabtqaaa");