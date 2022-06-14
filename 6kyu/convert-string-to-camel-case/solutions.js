function toCamelCase(str){
    const split = str.includes('_') ? str.split('_') : str.split('-')
    const cap =  split.map(x => x.split('').map((a,b) => b === 0 ? a.toUpperCase() : a).join(''))
  
    return split[0].concat(cap.slice(1).join(''))
}