// Not fast enough, find algo
const indexEqualsValue = a => a.find((x,y) => x === y) || -1


console.log( indexEqualsValue([-8,0,2,5]), 2 );
console.log( indexEqualsValue([-1,0,3,6]), -1 );
console.log( indexEqualsValue([-3,0,1,3,10]), 3 );
console.log( indexEqualsValue([-5, 1, 2, 3, 4, 5, 7, 10, 15]), 1 );
console.log( indexEqualsValue([9,10,11,12,13,14]), -1 );
console.log( indexEqualsValue([0]), 0 );