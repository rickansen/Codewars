// Solution 1
function simplify(number){
    let str = String(number)
    return [...str].map( (x,y) => {
        if (y === str.length - 1 && x != 0) return x
        return x != 0 ? `${x}*${10 ** (str.length - y - 1)}`: ''
    }).filter(x => x).join('+')
}

// Test Cases
console.log(simplify(8964631), "8*1000000+9*100000+6*10000+4*1000+6*100+3*10+1"); 
console.log(simplify(660), "6*100+6*10");
console.log(simplify(56),"5*10+6");
console.log(simplify(600), "6*100")