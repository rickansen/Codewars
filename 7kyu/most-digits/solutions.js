function findLongest(array){
    let max = Math.max(...array.map(x => String(x).length))
    return array.map(x => String(x).length).every( (x,y,z) => z.indexOf(x) === z.lastIndexOf(x))? Math.max(...array) : array[array.map(x => String(x).length).indexOf(max)]
}

console.log(findLongest([1, 10, 100]), 100)
console.log(findLongest([9000, 8, 800]), 9000)
console.log(findLongest([8, 900, 500]), 900)
console.log(findLongest([ 110220, 0, 122220, 2560, 0 ]), 110220)
