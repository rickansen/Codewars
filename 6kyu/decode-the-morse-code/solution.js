decodeMorse = function(morseCode){
    let morse = morseCode.split('   ').map(x => x.split(' ').map(x => MORSE_CODE[x]).join('')).join(' ')
    return morse.slice(morse.split('').findIndex(x => x !== ' '))
}