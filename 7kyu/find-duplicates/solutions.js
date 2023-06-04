function duplicates(arr) {
    let res = []
    for (let i = 1; i < arr.length; i++) {
        if (arr.slice(0, i).includes(arr[i])){
            if (res.includes(arr[i])) {
                continue
            }
            res.push(arr[i])
        }
    }
    return res
}

console.log(
    duplicates([1, 2, 3, 4, 5]), []);
console.log(
    duplicates([]), []);
console.log(
    duplicates(['no', 'duplicates', 'here']), []);
console.log(
    duplicates([1, 2, 3, 4, 3]), [3]);
console.log(
    duplicates([1, 2, 3, 3, 2, 1]), [3, 2, 1]);
console.log(
    duplicates([1, 2, 1, 2, 1, 2, 1]), [1, 2]);
console.log(
    duplicates([1, 2, 3, 4, '3']), []);
console.log(
    duplicates(['1', 2, 3, 3, '2', 1]), [3]);
console.log(
    duplicates(['zut', 'alors', 1, 2, 4, 4, 3, 3, '1', 5, 3, 'zut']), [4, 3, 'zut']);
