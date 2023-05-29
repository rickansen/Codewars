function remove (string) {  
    while (string[string.length - 1] === '!') {
        string = string.slice(0, string.length -1)
    }
    return string
}

console.log(remove("Hi!"), "Hi")
console.log(remove("Hi!!!"), "Hi")
console.log(remove("!Hi"), "!Hi")
console.log(remove("!Hi!"), "!Hi")
console.log(remove("Hi! Hi!"), "Hi! Hi")
console.log(remove("Hi"), "Hi")

