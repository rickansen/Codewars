function perfectSquare(string){
    let split = string.split('\n')
    return split.every(x => x.length === split.length)&& split.map(x => [...x].every(x => x === '.')).every(x => x) 
}

console.log(perfectSquare(".\n.\n."),false);
console.log(perfectSquare("....\n....\n....\n...."),true);
console.log(perfectSquare("..\n.."),true);
console.log(perfectSquare("...\n...\n..."),true);
console.log(perfectSquare("...\n....\n..."),false);
console.log(perfectSquare("...\n,..\n..."),false);
console.log(perfectSquare(",,,\n,,,\n,,,"),false);
console.log(perfectSquare(".\n.......\n."),false);
