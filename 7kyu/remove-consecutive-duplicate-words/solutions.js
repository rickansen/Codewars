function removeConsecutiveDuplicates(string) {
    if (!string) return ''

    string = string.split(' ')
    let arr = [string[0]]

    for (let i = 1; i < string.length; i++) {
        if (string[i] === string[i - 1]) {
            continue
        } else {
            arr.push(string[i])
        }
    }

    return arr.join(' ')
}

console.log(
    removeConsecutiveDuplicates(("")), "")
console.log(
    removeConsecutiveDuplicates(("alpha")), "alpha")
console.log(
    removeConsecutiveDuplicates(("alpha alphaalpha alphaalphaalpha")), "alpha alphaalpha alphaalphaalpha")
console.log(
    removeConsecutiveDuplicates(("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta")),"alpha beta gamma delta alpha beta gamma delta")
console.log(
    removeConsecutiveDuplicates(("alpha alpha alpha alpha")), "alpha")
console.log(
    removeConsecutiveDuplicates(("alpha beta alpha")), "alpha beta alpha")
console.log(
    removeConsecutiveDuplicates(("alpha alphabeta alphagamma")), "alpha alphabeta alphagamma")
console.log(
    removeConsecutiveDuplicates(("alpha alpha beta alpha alpha")), "alpha beta alpha")
console.log(
    removeConsecutiveDuplicates(("alpha beta beta")), "alpha beta")