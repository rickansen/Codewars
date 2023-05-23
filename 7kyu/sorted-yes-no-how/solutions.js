function isSortedAndHow(array) {
    let arr = array.slice(0), arr2 = array.slice(0)
    return arr.sort((a,b) => a - b).join('') === array.join('') ? 'yes, ascending' : arr2.sort((a,b) => b - a).join('') === array.join('') ? 'yes, descending' : 'no'
}

console.log(isSortedAndHow([1, 2]), 'yes, ascending');
console.log(isSortedAndHow([15, 7, 3, -8]), 'yes, descending');
console.log(isSortedAndHow([4, 2, 30]), 'no');
