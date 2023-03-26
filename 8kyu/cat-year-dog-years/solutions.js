var humanYearsCatYearsDogYears = function(x) {
    let a = x === 1 ? 15 : x === 2 ? 24 : 24
    if(x === 1) return [x,a,a]
    return [x, a + ((x -2) * 4) , a + ((x -2) * 5)]
}

console.log(humanYearsCatYearsDogYears(1), [1,15,15]);

console.log(humanYearsCatYearsDogYears(2), [2,24,24]);

console.log(humanYearsCatYearsDogYears(10), [10,56,64]);


// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that