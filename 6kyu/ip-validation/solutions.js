function isValidIP(str) {
    let regex = /[0-9]/
   if (
    str.split('.').map(x => x.split('').map(a => regex.test(a)).some(a => a === false)).includes(true) 
   || !str 
   || str.split('.').length !== 4 
   || str.split('.').map(x => x.split('').length > 1 && x.split('')[0] == 0).some(x => x === true)
   || str.split('.').map(x => !!x).includes(false)) return false
 
    return str.split('.').map(x => +x >=0 && +x <=255).every(x => x === true)
}