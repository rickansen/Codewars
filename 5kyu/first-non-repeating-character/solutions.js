function firstNonRepeatingLetter(s) {
    let index =  s.toLowerCase()
                    .split('')
                    .map(x => s.toLowerCase().indexOf(x) === s.toLowerCase().lastIndexOf(x))
                    .indexOf(true)
    return index > -1 ? s[index] : ''
}