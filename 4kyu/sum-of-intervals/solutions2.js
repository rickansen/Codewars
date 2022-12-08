function sumIntervals(intervals) {
    let sorted = intervals.sort((a,b) => a[0] - b[0] || a[1] - b[1])
    let sortedDupe = sorted.slice()
    let arr = []

        for ( let i = 0; i < sorted.length -1; i++) {
            if(sortedDupe.length > 1) {
                if (sortedDupe[0][1] >= sortedDupe[1][0]) {
                    let sliced = sortedDupe.splice(0,2)
                    arr.push([sliced[0][0], sliced[1][1]])
                    continue
                } else {
                    let sliced = sortedDupe.splice(0,1)
                    arr.push(...sliced)
                    continue
                }
            } 
            let sliced = sortedDupe.splice(0,1)
            arr.push(...sliced)
        }

    return arr
  
}

   
    


const mergeArr = (arr1, arr2) => [arr1[0], arr2[1]]
const isOverlapping = arr => {
    return arr.map((x,y,z) => y !== z.length -1 ? x[1] >= z[y+1][0] : x[0] <= z[y-1][1]).some(x => x === true)
}
// console.log(isOverlapping([ [1,2], [3,4], [5,6], [6,7]]))


console.log(
sumIntervals([
    [1, 4],
    [7, 10],
    [3, 5],
]),
7
);

console.log(
sumIntervals([
    [1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11],
]),
19
);

console.log(
sumIntervals([
    [0, 20],
    [-100000000, 10],
    [30, 40],
]),
100000030
);
console.log(
sumIntervals([
    [2, 3],
    [2, 6],
    [2, 4],
    [2, 9],
    [2, 5],
]),
7
);
