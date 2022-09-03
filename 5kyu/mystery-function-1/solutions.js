function solved(str) {
  str = [...str]
  if (str.length % 2 !== 0) str.splice( Math.floor(str.length / 2), 1)
  return str.map(x => x.charCodeAt()).sort((a,b) => a - b).map(x => String.fromCharCode(x)).join('')
}