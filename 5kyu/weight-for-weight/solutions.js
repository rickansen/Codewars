function orderWeight(strng) {
  let pairs = strng.split(' ')
  .filter(x => x)
  .map(x => [[...x]
    .map(a => +a)
    .reduce((b,c) => b + c) , x])
    .sort((a,b) => a[0] - b[0])
  let set = Array.from(new Set(pairs.map( x => x [0])))
  let final = set.map(x => pairs.filter(a => x === a[0])
  .sort()
  .map(a => a[1]))
  return [].concat(...final)
  .join(' ')
}
