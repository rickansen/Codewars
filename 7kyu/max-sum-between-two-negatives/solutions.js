function maxSumBetweenTwoNegatives(a) {
    let index = [...a.map( (x,y) => x < 0 ? y : '').filter(x => x !== '')]
    let arr = []

    for (i = 0; i < index.length -1; i++) {
        let y = index.slice(i, i+2)
        let val = a.slice(y[0] + 1, y[1])
        arr.push( val.length > 1 ? val.reduce((acc, curr) => acc + curr) : val[0] )
    }

    arr = arr.map(x => x === undefined ? 0 : x)
   return arr.length  !== 0 ? Math.max(...arr) : -1
}

console.log( 
    maxSumBetweenTwoNegatives([-1,6,-2,3,5,-7]), 8 );
console.log( 
    maxSumBetweenTwoNegatives([5,-1,-2]), 0 );
console.log( 
    maxSumBetweenTwoNegatives([1,-2]), -1 );
console.log( 
    maxSumBetweenTwoNegatives( [ -1, 3, -2 ]), 3 );
console.log( 
    maxSumBetweenTwoNegatives(  [ 1, -7, -2, -8 ]), 0 );
console.log( 
    maxSumBetweenTwoNegatives([8,  -8, -10, 0,  10,  5,-13, -15,  -9, 9, -15, 16,3,  -4]), 19 );
