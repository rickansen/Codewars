// Solution 1

function mixFruit (arr) {
    let regular = ['Banana', 'Orange', 'Apple', 'Lemon','Grapes'], special = ['Avocado', 'Strawberry', 'Mango']
    return Math.floor(arr.map(x => `${x[0].toUpperCase()}${x.slice(1).toLowerCase()}`).map(x => regular.includes(x) ? 5 : special.includes(x) ? 7 : 9).reduce((a,b) => a + b) / arr.length)
}

// Test Cases

console.log(mixFruit(['banana','mango','avocado']), 6);
console.log(mixFruit(['melon','Mango','kiwi']), 8);
console.log(mixFruit(['watermelon','cherry','avocado']), 8);
console.log(mixFruit(['apple','Banana']), 5);
console.log(mixFruit(['watermelon','lime','tomato']), 9);
console.log(mixFruit(['blackBerry','coconut','avocado']), 8);
console.log(mixFruit(['waterMelon','mango']), 8);
console.log(mixFruit(['watermelon','pEach']), 9);
console.log(mixFruit(['watermelon','Orange','grapes']), 6);
console.log(mixFruit(['watermelon']), 9);
console.log(mixFruit(['BlACKbeRrY','cOcONuT','avoCaDo']), 8);