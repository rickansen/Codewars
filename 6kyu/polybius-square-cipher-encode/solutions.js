function polybius (text) {
    text = text.replace(/J/g, "I")
    let alphabet = ['ABCDE', 'FGHIK', 'LMNOP', 'QRSTU', 'VWXYZ']
    return [...text].map(x =>  [index = alphabet.findIndex(a => a.includes(x)), x] ).map(x => x[0] !== -1 ? [ x[0] + 1, alphabet[x[0]].match(x[1]).index + 1] : ' ').reduce((a,b) => a.concat(b)).join('')
}

console.log(polybius('CODEWARS'), '1334141552114243', 'CODEWARS');
console.log(polybius('POLYBIUS SQUARE CIPHER'), '3534315412244543 434145114215 132435231542', 'POLYBIUS SQUARE CIPHER');
console.log(polybius('JJ'), 2424);
