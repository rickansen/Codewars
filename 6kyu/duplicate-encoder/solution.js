function duplicateEncode(word){
 
    let split = word.toLowerCase().split('')
    let set = Array.from(new Set(split))
    if ( split.length !== set.length ) {  
      let sort = split.slice(0).sort()
      let reps = Array.from(new Set (sort.map((x,y,z)=> z[y] === z[y + 1] ? x : 0).filter(x => x !== 0)))
  
      return split.map((x,y) => reps.includes(x)? ')': '(').join('')
    } else {
      return split.map(x=> '(').join('')
    }
  }