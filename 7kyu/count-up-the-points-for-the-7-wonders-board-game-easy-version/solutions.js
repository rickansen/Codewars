const solve = (compasses, gears, tablets) => (Math.min(...[compasses, gears, tablets]) * 7)  + compasses ** 2 + gears ** 2 + tablets** 2

    

console.log(solve(0, 0, 0),  0);
console.log(solve(1, 1, 1), 10);
console.log(solve(2, 1, 1), 13);
console.log(solve(4, 2, 2), 38);
console.log(solve(7, 2, 2), 71);