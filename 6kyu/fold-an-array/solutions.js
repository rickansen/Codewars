function foldArray(array, runs) {

    for (let i = 0; i < runs; i++) {
        let length = array.length / 2 % 1 === 0 ? array.length / 2: array.length / 2 + 1
       array = array.slice(0, length).map( (x,y) => x + (array.length - y - 1 !== y ? array[array.length - y - 1] : 0) )
    }
  
  return array
}
