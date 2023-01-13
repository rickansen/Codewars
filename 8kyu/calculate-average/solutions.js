function findAverage(array) {
    if (array.length === 0) return 0
    return array.reduce((a,b) => a + b) / array.length}