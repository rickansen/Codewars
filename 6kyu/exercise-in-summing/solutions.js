// Solution 1

function minimumSum(values, n) {
    if (values.length === 0 || n === 0) return 0
    return values.sort((a,b) => a - b).slice(0,n).reduce((a,b) => a + b)
}

function maximumSum(values, n) {
    if (values.length === 0 || n === 0) return 0
    return values.sort((a,b) => a - b).slice(-n).reduce((a,b) => a + b)
}

// Test Cases

var values = [5, 4, 3, 2, 1];
console.log(minimumSum(values, 2), 3);
console.log(maximumSum(values, 3), 12);