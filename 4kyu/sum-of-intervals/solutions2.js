function sumIntervals(intervals) {
    let sorted = intervals.sort((a,b) => a[0] - b[0] || a[1] - b[1])
    let sortedDupe = sorted.slice(0)
    let pairs = []
    // for (let i = 0; i < intervals.length - 1; i++) {
    //     if (sortedDupe[0][1] >= sortedDupe[1][0]) {
    //         let splice = sortedDupe.splice(0,2)
    //         merged.push([splice[0][0], splice[1][1]])
    //         i++
    //     } else {
    //         let splice = sortedDupe.splice(0,1)
    //         merged.push(splice)
    //     }
    // }

   for (let i = 0; i < intervals.length / 2; i++) pairs.push(sorted.slice(i*2, i*2+2)) 

while (!isOverlapping) {
            for (let i = 0; i < pairs.length; i++) {
            if (i !== pairs.length - 1){
                if (pairs[i][0][1] >= pairs[i][1][0]) {
                    pairs[i] = mergeArr(pairs[i][0], pairs[i][1])
                    continue
                } 
            }  
            if (pairs[i].length === 1) pairs[i] = pairs[i][0]
        }

    pairs = Array(Math.ceil(pairs.length / 2)).fill('').map( (x,y) => pairs.slice(y*2, y*2+2))
}






    return pairs
}

const mergeArr = (arr1, arr2) => [arr1[0], arr2[1]]
const isOverlapping = arr => arr.map((x,y,z) => y !== z.length -1 ? x[1] >= z[y+1][0] : x[0] <= z[y-1][1]).every(x => x === false)


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
