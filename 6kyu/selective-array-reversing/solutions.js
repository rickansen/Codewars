function selReverse(array, length) {
    let res = []
    let temp = array.length
    if (length <= 1 || array.length === 0) return array

    for (let i = 0; i < temp/length; i++) {
        res.push(array.splice(0,length).reverse())
    }

    return res.reduce((a,b) => a.concat(b))
}

console.log(
    selReverse([2,4,6,8,10,12,14,16], 3), [6,4,2,12,10,8,16,14]);
console.log(
    selReverse([1,2,3,4,5,6], 2), [2,1,4,3,6,5]);
console.log(
    selReverse([1,2,3,4,5,6], 0), [1,2,3,4,5,6]);
console.log(
    selReverse([1,2,3,4,5,6], 1), [1,2,3,4,5,6]);
console.log(
    selReverse([1,2,3,4,5,6], 10), [6,5,4,3,2,1]);