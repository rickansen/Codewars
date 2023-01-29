function longer(s) {
    s = s.split(' ')
    for ( let i = 0; i < s.length; i++) {
        for ( let j = 0; j < s.length; j++) {
            if ( j < s.length - 1) swap(s, s[j], s[j+1])
        }   
    }
    return s.join(' ')
}

function swap (arr, a, b) {
    let in1 = arr.indexOf(a), in2 = arr.indexOf(b)
    let tempA = a
    let tempB = b

    if (a.length === b.length) {
        [arr[in1], arr[in2]] = [a,b].sort()
    } else if (a.length > b.length) {
        arr[in1] = tempB
        arr[in2] = tempA
    } 
}


console.log(longer("Another Green World"), "Green World Another")
console.log(longer("Darkness on the edge of Town"), "of on the Town edge Darkness")
console.log(longer("Have you ever Seen the Rain"), "the you Have Rain Seen ever")
console.log(longer("Like a Rolling Stone"), "a Like Stone Rolling")
console.log(longer("This will be our Year"), "be our This Year will")
console.log(longer("hello Hello"), "Hello hello")

console.log(swap(["Another", "Green", "World"], "Another", "Green"), ["Green","Another"])
console.log(swap(["green", "Green", "World"], "green", "Green"), ["Green","green"])
console.log(swap(["bbb", "aaaa", "World"], "bbb", "aaaa"), ["Green","green"])