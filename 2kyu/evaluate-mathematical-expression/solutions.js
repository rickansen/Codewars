var calc = function (expression) {
  
    let invalid = [new RegExp(/\D [- ] \d/g), new RegExp(/\D - \(/g),  new RegExp(/[^\d ]- /g)]
    if (invalid.map(x => x.test(expression)).some(x => x === true)) return 'Invalid'

    function add (a, b) {
        return a + b
    }

    function sub (a, b) {
        return a - b
    }

    function multi (a, b) {
        return a * b
    }

    function div (a, b) {
        return a / b
    }
    
    let newExp = []
    for (let i = 0; i < expression.length; i++) {

    }

    let regex = new RegExp(/\d/g)

    expression = [...expression.split('').filter(x => x !== ' ').join('')].map((x,y,z) => {
        if (x === '-' && z[y-1] === '-') {
            return '-'
        } else if (x === '(' || x === ')' || x === '+' || x === '-' || x === '*' || x === '/' || x === '/') {
            return ` ${x} `
        } else {
            return x
        }
    }).join('').split(' ').filter(x => x).map(x => regex.test(x) ? +x : x)

    function calculate (exp) {
        if (expression.includes('+')) {
            return add(expression[0], expression[2])
        } else if (expression.includes('-')) {
            return sub(expression[0], expression[2])
        } else if (expression.includes('*')) {
            return multi(expression[0], expression[2])
        } else {
            return div(expression[0], expression[2])
        }
    }
    if (expression.length < 3) return +expression.join('')
    if (expression.length === 3) return calculate(expression)
}

console.log(
    calc('2 / (2 + 3) * 4.33 - -6'), 7.732)

console.log(
        calc('2 / (2 + 3) * 4.33 - -11'))

console.log(
    calc('1+1'), 2)
console.log(
    calc('1 - 1'), 0)
console.log(
    calc('1* 1'), 1)
console.log(
    calc('1 /1'), 1)
console.log(
    calc('-123'), -123)
console.log(
    calc('123'), 123)
console.log(
    calc('2 /2+3 * 4.75- -6'), 21.25)
console.log(
    calc('12* 123'), 1476)
console.log(
    calc('1 - - 1'),    'Invalid')
console.log(
    calc('1- - 1'),     'Invalid')
console.log(
    calc('6 + - (4)'),  'Invalid')
console.log(
    calc('6 + -(- 4)'), 'Invalid')