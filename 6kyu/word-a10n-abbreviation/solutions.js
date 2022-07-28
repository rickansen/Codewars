function abbreviate(string) {
    let regex = new RegExp(/[a-z]/i)
  
    if (string.split('').map((x,y) => regex.test(x)).every(x => x === true)) {
      return string.length > 3 ? `${string[0]}${string.length-2}${string[string.length-1]}` : string
    } else {
      let char = string.split('').map((x,y) => regex.test(x) ? '' : x).filter(x => x)
      char.push('')
      let arr = []
  
      return string.split('').map(x => regex.test(x) ? x : ' ').filter(x => x).join('').split(' ').map(x => x.length > 3 ? `${x[0]}${x.length-2}${x[x.length-1]}` : x).map((x,y)=> x.concat(char[y])).join('')
    }
  
}