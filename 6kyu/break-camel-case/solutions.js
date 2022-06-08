function solution(string) {
    let caps = string.match(/[A-Z]/g)
    return string.split('').map(x=> x.replace(/[A-Z]/g, 1)).map(x=> x == 1? ' ' + caps.splice(0,1): x).join('')
}