function validate(n){
    n = String(n)
    n = n.length % 2 === 0 ? [...n].map( (x,y) => y % 2 === 0 ?  +x * 2 : +x) : [...n].map( (x,y) => y % 2 !== 0 ?  +x * 2 : +x)
    n = n.map( x => x > 9 ? x - 9 : x).reduce( (a,b) => a + b )
  return n % 10 === 0
}
