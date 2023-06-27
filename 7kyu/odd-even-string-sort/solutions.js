const sortMyString = s => `${[...s].filter((x,y) => y % 2 === 0).join('')} ${[...s].filter((x,y) => y % 2 === 1).join('')}`

console.log(sortMyString("CodeWars"), "CdWr oeas");
console.log(sortMyString("YCOLUE'VREER"), "YOU'RE CLEVER");   
