function comp(array1, array2){

    if (array1 &&  array2) {
      let sq = array1.sort((a,b) => a - b).map(x => x * x)
      return  array2.sort((a,b) => a - b).map((x,y) => x === sq[y]).every(x => x === true)
    } else {
      return false
    }
     
}