function validISBN10(isbn) {

    if (isbn.length !== 10 || isbn.split('').filter(x => x === 'X').length > 1 || (isbn.indexOf('X') >= 0  && isbn.indexOf('X') < 9)) return false
    
    if (isbn.includes('X')) {
      return isbn.split('').map((x,y,z) => y !== z.length -1 ? +x * (y+1) : 100).reduce((a,b) => a + b) % 11 === 0
    } else {
      return isbn.split('').map((x,y,z) => +x * (y+1)).reduce((a,b) => a + b) % 11 === 0
    }
}