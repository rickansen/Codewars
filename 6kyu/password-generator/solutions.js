// Solution 1: Not very randomized

function passwordGen(){
    let randomLength = getRandomLength()
    let password = []
    let index = getRandomIndex(randomLength)
    let index2 = getRandomIndex(randomLength)

    while (index2 === index) {
        index2 = getRandomIndex(randomLength)
    }

    for (let i = 0; i < randomLength; i++) password.push(getRandomLow())
    password[index] = getRandomUp(), password[index2] = getRandomNumber()
    return password.join('')
}

const getRandomLength = () => Math.floor(Math.random() * 15) + 6 
const getRandomLow = () => String.fromCharCode(Math.ceil(Math.random() * 26) + 96)
const getRandomUp = () => String.fromCharCode(Math.ceil(Math.random() * 26) + 64)
const getRandomNumber = () => Math.floor(Math.random() * 10)
const getRandomIndex = x => Math.floor(Math.random() * x)

// Test Case

console.log(passwordGen())
console.log(passwordGen())
console.log(passwordGen())
console.log(passwordGen())
console.log(passwordGen())
console.log(passwordGen())
