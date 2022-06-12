function dirReduc(arr){

    let pair = arr.map((x,y,z) => y!== z.length - 1 ? x.concat(z[y+1]) : x)
  
    while ( pair.includes('NORTHSOUTH') || pair.includes('SOUTHNORTH') || pair.includes('EASTWEST') || pair.includes('WESTEAST') ) {
      arr = arr.map((x,y,z) => x === 'NORTH' && z[y+1] === 'SOUTH' || x === 'EAST' && z[y+1] === 'WEST' ? '' : x).map((x,y,z) => z[y-1] === '' ? '' : x).filter(x => x).map((x,y,z) => x === 'SOUTH' && z[y+1] === 'NORTH' || x === 'WEST' && z[y+1] === 'EAST' ? '' : x).map((x,y,z) => z[y-1] === '' ? '' : x).filter(x => x)
  
      pair = arr.map((x,y,z) => y!== z.length - 1 ? x.concat(z[y+1]) : x)
  
    }
  
    return arr
}