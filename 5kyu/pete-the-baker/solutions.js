function cakes(recipe, available) {
    let recKey = Object.keys(recipe), recVal = Object.values(recipe)
    let avKey = Object.keys(available), avVal = Object.values(available)
  
    let final = avKey.map((x,y) => recKey.includes(x)? [x, avVal[y]]: '').filter(x => x)
  
    if (final.length === recKey.length) {
      return Math.min(...final.map((x,y) => Math.floor(final[y][1] / recVal[recKey.indexOf(x[0])])))
      
    } else {
      return 0
    }
  
}