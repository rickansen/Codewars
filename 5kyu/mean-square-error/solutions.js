var solution = function(firstArray, secondArray) {
    return firstArray.map((x,y) => (x - secondArray[y]) ** 2 ).reduce((a,b) => a + b) / firstArray.length
}