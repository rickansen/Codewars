const noBoringZeros = n => {
    if (n === 0) return 0

    n = [...String(n)]
    while ( n[n.length - 1] == 0 ) {
        n.pop()
    }
    return +n.join('')
}
console.log(noBoringZeros(1450), 145)
console.log(noBoringZeros(960000), 96)
console.log(noBoringZeros(1050), 105)
console.log(noBoringZeros(-1050), -105)
console.log(noBoringZeros(-105), -105)
console.log(noBoringZeros(0), 0)