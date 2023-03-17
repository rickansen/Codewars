// Solution 1: too slow,,, refactor
function findDupsMiss(arr) {
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    let arrDupe = Array(...new Set(arr.sort((a,b) => a - b)))
    let miss = arrDupe.find( (x,y) => x !== min + y) - 1
    let dupe = arrDupe.filter(x => arr.indexOf(x) !== arr.lastIndexOf(x))
    return [miss, dupe]
}

var arr1 = [10,9,8,9,6,1,2,4,3,2,5,5,3];
console.log(findDupsMiss(arr1), [7, [2, 3, 5, 9]]);

var arr2 = [20,19,6,9,7,17,16,17,12,5,6,8,9,10,14,13,11,14,15,19];
console.log(findDupsMiss(arr2),[18, [6, 9, 14, 17, 19]]);

var arr3 = [24,25,34,40,38,26,33,29,50,31,33,56,35,36,53,49,57,27,37,40,48,44,32,35,45,52,43,47,26,51,55,28,41,42,46,51,25,30,44,54];
console.log(findDupsMiss(arr3),[39, [25, 26, 33, 35, 40, 44, 51]]);