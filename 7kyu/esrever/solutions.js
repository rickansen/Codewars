const reverse = array => {
    let arr = []

    for (let i = array.length - 1; i >= 0; i--) {
        arr.push(array[i])
    }   
    return arr
}

console.log( reverse([1,2,3]), [3,2,1] )
console.log( reverse([1,null,14,"two"]), ["two",14,null,1] )
