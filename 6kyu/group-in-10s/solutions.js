function groupIn10s(...arr) { 
    let sorted = arr.sort((a,b) => a - b)

    let final = Array(Math.floor(Math.floor(Math.max(...arr) / 10) + 1))
        .fill([0])
        .map((x,y) => sorted.splice(0, sorted.filter(a => a < 10 * (y + 1) && a >= 10 * y).length)).map(x => x.length === 0 ? '' : x)

    while (final.includes('')) {
        delete final[final.findIndex(x => x === '')]
    }

    return final
}

console.log(groupIn10s(100))
// groupIn10s( 1,2,3 )
// , [ [ 1, 2, 3 ] ] 
// )

// assert.deepEqual( 
//   groupIn10s( 8, 12, 38, 3, 17, 19, 25, 35, 50 )
// , [ [ 3, 8 ]
//   , [ 12, 17, 19 ]
//   , [ 25 ]
//   , [ 35, 38 ]
//   , 
//   , [ 50 ]
//   ]
// )

// assert.deepEqual(
//   groupIn10s( 12, 10, 11, 13, 25, 28, 29, 49, 51, 90 )
// , [ 
//   , [ 10, 11, 12, 13 ]
//   , [ 25, 28, 29 ]
//   ,
//   , [ 49 ]
//   , [ 51 ]
//   ,
//   ,
//   ,
//   , [ 90 ] 
//   ]
// )

// assert.deepEqual(
//   groupIn10s()
// , []
// )


// assert.deepEqual(
//   groupIn10s(100)
// , [
//   ,
//   ,
//   ,
//   ,
//   ,
//   ,
//   ,
//   ,
//   ,
//   ,
//     [ 100 ]
//   ]
// )
// });
// });