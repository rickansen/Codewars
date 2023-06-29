var greatestDistance = data => data.some(x => data.indexOf(x) !== data.lastIndexOf(x)) ? Math.max(...data.map((x,y,z) => z.indexOf(x) !== z.lastIndexOf(x) ? [z.indexOf(x), z.lastIndexOf(x)] : x).filter(x => typeof x !== 'number').map(x => x[1] - x[0])) : 0


console.log(greatestDistance([9,7,1,2,3,7,0,-1,-2]), 4);
console.log(greatestDistance([0,7,0,2,3,7,0,-1,-2]), 6);
console.log(greatestDistance([1,2,3,4]), 0);
