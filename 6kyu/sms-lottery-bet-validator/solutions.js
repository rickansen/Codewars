function validateBet(game, text){

    let arr = []
    if (text.replace(/[ ,0-9]|/g, '').length > 0 || game[0] === game[1]) return null
    text = [...text]

    for (let i = 0; i < text.length; i++)   {
        if (text[i] === ' ' || text[i] === ',')  {
            text[i] = '.'
        }
        continue;
    }
    text = text.join('').replace(/\.{1,}/g, ' ').split(' ').map(x => +x)
    
  
    return text.length === game[0] && text.every(x => x > 0 &&x <= game[1]) && text.every(x => text.indexOf(x) === text.lastIndexOf(x)) ? text.sort((a,b) => a - b) :  null
}

console.log(
    validateBet([6,15], "1  14 ,11, 8 7 ,10"), [1, 7, 8, 10, 11, 14])

console.log(
    validateBet([6,6], "4  3 6,2, 1,5"), null)

console.log(
    validateBet([5, 90], "1 2 3 4 5"), [1, 2, 3, 4, 5])
console.log(
    validateBet([5, 90], "5 , 3, 1   4,2"), [1, 2, 3, 4, 5])
console.log(
    validateBet([5, 90], "1, 2, 3; 4, 5"), null)
console.log(
    validateBet([5, 90], "1, 2, 3, 4"), null)
console.log(
    validateBet([5, 90], "1, 2, 3, 4, 95"), null)
console.log(
    validateBet([5, 90], ""), null)
console.log(
    validateBet([5, 90], "1, 2, 3 4 5 6"), null)
console.log(
    validateBet([5, 90], "0 1 2 3 4"), null)
console.log(
    validateBet([5, 90], "1 1 1 1 1"), null)
console.log(
    validateBet([5, 90], "1 2 3 4 5 5"), null)
console.log(
    validateBet([5, 90], "I 2 3 4 5"), null)
console.log(
    validateBet([5, 90], "1, 2, 3; 4, 5"), null)
console.log(
    validateBet([4, 90], "1 1 1 2 5 45"), null)
console.log(
    validateBet([6, 41], "5,22,18,65,32,19,27"), null)