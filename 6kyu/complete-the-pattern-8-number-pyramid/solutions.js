function pattern(n){
    if (n < 1) return ''
    return Array(n).fill(1).map( (x,y) => {
        let lvl = (y+1) % 10
        let space = n - (y+1)
        let mirror = Array(y).fill(1).map((a,b) => (b + 1) % 10).join('')
        return `${' '.repeat(space)}${mirror}${lvl}${[...mirror].reverse().join('')}${' '.repeat(space)}`
    }).join('\n')
}

console.log(pattern(7),"      1      \n     121     \n    12321    \n   1234321   \n  123454321  \n 12345654321 \n1234567654321");
console.log(pattern(1),"1");
console.log(pattern(4),"   1   \n  121  \n 12321 \n1234321");
console.log(pattern(0),"");
console.log(pattern(-25),"");