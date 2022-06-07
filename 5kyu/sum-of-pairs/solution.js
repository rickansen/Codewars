function sumPairs(ints, s) {
    let arr = [] 
    for (let i = 0; i < ints.length; i++){
      for (let x = 0; x < ints.length; x++){
        arr.push(ints[x] + ints[i !== x ? i : i +1] == s ? [ints[i], ints[x]] : '')
      }
    }
  
    let filt = arr.filter(x => x).map(x => x.map(a => ints.indexOf(a)) !==  x.map(a => ints.lastIndexOf(a)) ? x : '')
  
    let distance = filt.map(x => x.map((a,b,c) =>  c[0] === c[1] ? b === 0 ? ints.indexOf(a) : ints.lastIndexOf(a): ints.indexOf(a))).map(x => Math.abs(x.reduce((a,b) => b - a, 0 ))).map(x => x === 0? 999999 : x)
  
    return filt[distance.indexOf(Math.min(...distance))]
  
  }