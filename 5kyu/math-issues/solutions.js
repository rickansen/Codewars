Math.round = function(number) {
    return number % 1 >= 0.5 ? (number - (number % 1)) + 1 : number - (number % 1)
};

Math.ceil = function(number) {
    return number % 1 !== 0 ? (number - number % 1) + 1 : number
};

Math.floor = function(number) {
    return number % 1 !== 0 ? number - (number % 1) : number
};