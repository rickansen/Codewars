function solution(digits){
    let arr = []

    for (let i = 0; i < digits.length -4; i++) {
        arr.push(digits.slice(i, i + 5))
    }
    return Math.max(...arr.map(x => +x))
}

console.log(
    solution('1234567898765'), 98765, 'Failed when max 5 digits is at end of number')
console.log(
    solution("731674765"), 74765, 'Failed in overlapping test')
