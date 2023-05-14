const getLength = arr => arr.length

const getFirst = arr => arr[0]

const getLast = arr => arr[arr.length - 1]

const pushElement = arr => {
    var el=1;
    arr.push(el)
    return arr
}
    
const popElement = arr => {
    arr.pop()
    return arr
}
    
console.log(getLength([1,2,3]),3);
console.log(getFirst([1,2,3]),1);
console.log(getLast([1,2,3]),3);
console.log(pushElement([1,2,3]).length,4);
console.log(popElement([1,2,3]).length,2);