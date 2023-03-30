function add(...x) {
    if (x.length === 0) return 0
    let map = [...x].map( (a,b) => a / (b+1))
    return map.length > 1 ? Math.round(map.reduce((a,b) => a+b)) : map[0]
}


console.log(add(), 0);

console.log(add(100, 200, 300), 300);

console.log(add(2), 2);

console.log(add(4, -3, -2), 2);

console.log(add(-1, -2, -3, -4), -4);
