function addLetters(...letters) {
    return letters.length === 0 ? 'z' : letters.every(x => /[a-z]/.test(x)) ? 
    String.fromCharCode(((letters.map(x => (x.charCodeAt() -96)).reduce((a,b) => a + b) % 26 ) || 26) + 96)
    : 'z' 
}

console.log(addLetters('a', 'b', 'c'), 'f')
console.log(addLetters('z'), 'z')
console.log(addLetters('a', 'b'), 'c')
console.log(addLetters('c'), 'c')
console.log(addLetters('z', 'a'), 'a')
console.log(addLetters('y', 'c', 'b'), 'd')
console.log(addLetters(), 'z')
