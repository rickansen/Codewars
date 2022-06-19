function alphanumeric(string){
    let regex1 = new RegExp(/[a-z]/i)
    let regex2 = new RegExp(/[0-9]/)
    return string ? string.split('').filter(x => regex1.test(x) || regex2.test(x)).length === string.length : false
}