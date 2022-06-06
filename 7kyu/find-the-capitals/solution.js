var capitals = function (word) {
    let regex = new RegExp(/[A-Z]/)
    return word.split('').map((x,y) => regex.test(x)? y: '').filter(x => x!== '')
};