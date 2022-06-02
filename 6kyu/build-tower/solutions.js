function towerBuilder(nFloors) {
    let arr = []
  
    for (let i = 1; i <= nFloors; i++) {
      arr.push(i * 2 - 1)
    }
  
    return arr.map(x => `${' '.repeat(((arr[arr.length -1] - x) / 2))}${'*'.repeat(x)}${' '.repeat(((arr[arr.length -1] - x) / 2))}` ) 
  
  }