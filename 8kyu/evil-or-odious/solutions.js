const evil = n => [...`${n.toString(2)}`].filter(x => x == 1).length % 2 === 0 ? "It's Evil!" : "It's Odious!"

console.log(evil(1),"It's Odious!");
console.log(evil(2),"It's Odious!");
console.log(evil(3),"It's Evil!");