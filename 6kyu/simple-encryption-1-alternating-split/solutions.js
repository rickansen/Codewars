function encrypt(text, n) {

    if (n < 1 || !text) return text
    for ( let i = 0; i < n; i++ ) {
      text = text.split('').filter((x,y) => y % 2 !== 0).concat(text.split('').filter((x,y) => y % 2 === 0)).join('')
    }
    
    return text
}

function decrypt(encryptedText, n) {
    
    if (n < 1 || !encryptedText) return encryptedText 
    length = encryptedText.length
    for (let i = 0; i < n; i++) {
        encryptedText = encryptedText.split('').slice(Math.floor(length / 2)).map((x,y) => x + encryptedText.split('').slice(0, Math.floor(length / 2))[y]).join('').slice(0, length)
    }
    return encryptedText
}