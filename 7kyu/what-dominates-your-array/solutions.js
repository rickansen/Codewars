// Solution 1: Works but not enough for performance tests
function dominator(arr) {
    let pair = [...new Set(arr)].map(x => [x, arr.filter(a => a === x).length ]).filter(x => x[1] > arr.length / 2)
   return pair.length > 0 ? pair[0][0] : -1
}

console.log(dominator([3,4,3,2,3,1,3,3]),3);
console.log(dominator([1,2,3,4,5]),-1);
console.log(dominator([1,1,1,2,2,2]),-1);
console.log(dominator([1,1,1,2,2,2,2]),2);
console.log(dominator([0,0,0,0,0,0,2,2,2,2]),2);
