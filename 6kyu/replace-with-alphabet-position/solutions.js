function alphabetPosition(text) {
    let regex = new RegExp(/[a-z]/i)
    
    return text.toLowerCase().split('').filter(x => regex.test(x)).map(x => x.charCodeAt()-96).join(' ')
}