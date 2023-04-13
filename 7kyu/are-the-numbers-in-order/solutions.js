const inAscOrder = arr => !arr.slice(0, arr.length-1).some((x,y) => x > arr[y+1])


console.log(
    inAscOrder([1, 2, 4, 7, 19]), true, 'The list of numbers "1, 2, 4, 7, 19" is in ascending order');
console.log(
    inAscOrder([1, 2, 3, 4, 5]), true, 'The list of numbers "1, 2, 3, 4, 5" is in ascending order');
console.log(
    inAscOrder([1, 6, 10, 18, 2, 4, 20]), false, 'The list of numbers "1, 6, 10, 18, 2, 4, 20" is not in ascending order');
console.log(
    inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]), false, 'The list of numbers "9, 8, 7, 6, 5, 4, 3, 2, 1" is in DESCENDING order not ascending order');
