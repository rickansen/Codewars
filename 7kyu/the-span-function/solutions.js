function span(arr, predicate) {
    let arr1 = []
    let j = 0

    for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i])) {
            arr1.push(arr[i])
            j++
        } else {
            break
        }
        
    }

    return [arr1, arr.slice(j)]
}

function isEven(x) {
    return Math.abs(x) % 2 === 0;
}

function isOdd(x) {
    return Math.abs(x) % 2 !== 0;
}

var arr1 = [2,4,6,1,4,8];
var arr2 = [1,4,5,7,6];
var arr3 = [13,17,19,11,21];


console.log(span(arr1, isEven), [[2,4,6],[1,4,8]]);
console.log(span(arr2, isEven), [[], arr2]);
console.log(span(arr3, isOdd), [arr3,[]]);
