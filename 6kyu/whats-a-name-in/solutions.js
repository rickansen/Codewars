function nameInStr(str, name){
    let res = 0, temp = 0
    str = str.toLowerCase(), name = name.toLowerCase()
    for (let i = 0; i < str.length; i++) {
        if (str[i] === name[temp]) {
            res++
            temp++
        }
    }
    return res === name.length
}

console.log(nameInStr('Across the rivers', 'chris'), true)
console.log(nameInStr('Next to a lake', 'chris'), false)
console.log(nameInStr('Under a sea', 'chris'), false)
console.log(nameInStr('A crew that boards the ship', 'chris'), false)
console.log(nameInStr('A live son', 'Allison'), false)