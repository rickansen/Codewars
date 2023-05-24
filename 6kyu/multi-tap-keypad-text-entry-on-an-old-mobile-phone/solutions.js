function presses(phrase) {
    phrase = phrase.toUpperCase()
    let keypad = [' 0', '1', 'ABC2', 'DEF3', 'GHI4', 'JKL5', 'MNO6', 'PQRS7', 'TUV8', 'WXYZ9']
    return phrase.split('').map(x => keypad.find(a => a.includes(x)).indexOf(x)+1 ).reduce((a,b) => a + b)
}

console.log(presses("LOL"), 9)
console.log(presses("HOW R U"), 13)
console.log(presses("WHERE DO U WANT 2 MEET L8R"), 47)