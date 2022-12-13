// Solution 1

function encryptor (key, message) {
    if (!message) return ''
	return [...message].map(x => {
        let convert = x.charCodeAt()
        let newChar = convert + key
        let up = newChar - 64
        let down = newChar - 96
        if ( /[A-Z]/.test(x)) {
            if (up > 26 ) return (up) % 26 + 64
            if (up < 0) return 26 + ( up % 26) + 64
            return up + 64
        } else if ( /[a-z]/.test(x)) {
            if (down > 26 ) return (down)  % 26 + 96
            if (down < 0) return 26 + (down % 26) + 96
            return down + 96
        } 
        return x
    }).map(x => x === 96 ? 96 + 26 : x === 64 ? 64 + 26 : x).map(x => typeof x === 'number' ? String.fromCharCode(x) : x).join('')
}

// Test Cases

console.log(encryptor(13, ''), '');
console.log(encryptor(0, 'no cypher'), 'no cypher');
console.log(encryptor(13, 'Caesar Cipher'), 'Pnrfne Pvcure');
console.log(encryptor(-5, 'Hello World!'), 'Czggj Rjmgy!');
console.log(encryptor(27, 'Whoopi Goldberg'), 'Xippqj Hpmecfsh');
console.log(encryptor(1, 'no cypher'), 'no cypher');
console.log(encryptor(-35, 'CIqBN\*(lS=@pe[RRh*`mevVcvuSJ'), 'TZhSE\\*(cJ=@gv[IIy*`dvmMtmlJA');
console.log(encryptor(0, 'aA'), 'no cypher');
