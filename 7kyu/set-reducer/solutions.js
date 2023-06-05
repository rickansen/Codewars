function setReducer(arr) {

    let i = 0

    while (arr.length > 1) {
        while (i < arr.length) {

            if (arr[i] !== arr[i+1]) {
                arr[i] = 1
            } else {
                let length = arr.slice(i, arr.length).map((x,y,z) => x === z[y+1]).indexOf(false)+1
                arr.splice(i, length, length)
            }
            
            i++
            
        }
        i = 0
    }
        
    return arr[0]
}

console.log(setReducer( [0, 4, 6, 8, 8, 8, 5, 5, 7]), 2)
console.log(setReducer( [3,1,1,1]), 2)
console.log(setReducer( [9, 4, 1, 1, 1, 2, 3, 9, 4, 6, 2]), 3)
console.log(setReducer( [1, 7, 0, 6, 1, 9, 0, 7, 1, 6, 0, 9, 0]), 13)
console.log(setReducer( [0, 2, 7, 0, 0, 6, 2, 1, 2, 2, 3, 4]), 5)
console.log(setReducer( [9, 6, 3, 3, 3, 6, 7, 5, 2, 4, 1, 6, 9]), 3)
console.log(setReducer( [5, 8, 1, 0, 5, 0, 6, 5, 8, 4, 4, 9, 7]), 3)
console.log(setReducer( [5, 7, 7, 8, 7, 8, 6, 3, 5, 9, 0, 9, 1, 1]), 2)
console.log(setReducer( [7, 9, 7, 3, 3, 5, 3, 4, 9, 4, 3]), 3)
console.log(setReducer( [6, 0, 5, 9, 5, 0, 0, 2, 5, 0]), 3)
