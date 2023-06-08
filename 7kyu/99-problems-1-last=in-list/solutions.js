const last = xs => xs.length !== 0 ? xs[xs.length -1] : null

console.log( last([1,2,3]), 3, "last([1,2,3]) == 3");
console.log( last([]), null, "last( [] ) == null");
