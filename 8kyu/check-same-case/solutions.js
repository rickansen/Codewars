function sameCase (a, b) {
    let arr = [a,b].map(x => /[a-z]/.test(x) ? 1 : /[A-Z]/.test(x) ? 0 : null)
    return arr.every(x => x === 0) || arr.every(x => x === 1) ? 1 : !arr.includes(null) ? 0 : -1
}


console.log(sameCase('C', 'B'), 1);
console.log(sameCase('b', 'a'), 1);
console.log(sameCase('d', 'd'), 1);
console.log(sameCase('A', 's'), 0);
console.log(sameCase('c', 'B'), 0);
console.log(sameCase('b', 'Z'), 0);
console.log(sameCase('\t', 'Z'), -1);
console.log(sameCase('H', ':'), -1);