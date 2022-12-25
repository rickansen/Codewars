// Solution 1: Time Complexity too high
function strongestEven(n, m){
    let arr = []
    for (let i = n; i <=m ; i++) {
        if (i % 2 === 0) arr.push([i,i])
    }

    for (let i = 0; i < arr.length; i++) {
        let temp = 0
        while(arr[i][0] % 2 === 0) {
            arr[i][0] /= 2
            temp++
        }
        arr[i][0] = temp
    }
    arr = arr.sort((a,b) => a[0] - b[0])
    let max = arr[arr.length-1][0]
    return arr.filter(x => x[0] === max).sort((a,b) => a[1] - b[1])[0][1]
}

console.log(strongestEven(1, 2), 2);
console.log(strongestEven(5, 10), 8);
console.log(strongestEven(48, 56), 48);
console.log(strongestEven(129, 193), 192);