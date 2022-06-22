const shortcut = string => {
    let regex = new RegExp(/[aeiou]/)
    return string.split('').filter(x => !regex.test(x)).join('')
}