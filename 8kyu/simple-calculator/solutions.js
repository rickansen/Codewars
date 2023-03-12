const calculator = (a,b,sign) => [a,b].every(x => typeof x === 'number') && /[+-/*]/.test(sign) ? eval(`${a} ${sign} ${b}`) : "unknown value"

console.log(calculator(1,2,"+"), 3, "calculate");
console.log(calculator(1,2,"-"), -1, "calculate");
console.log(calculator(3,5,"*"), 15, "calculate");
console.log(calculator(6,2,"/"), 3, "calculate");
console.log(calculator(6,2,"$"), "unknown value", "calculate"); 
console.log(calculator(6,"h","*"), "unknown value", "calculate");   
console.log(calculator(62, 0, "/"), "unknown value", "calculate");   
//62 0 /