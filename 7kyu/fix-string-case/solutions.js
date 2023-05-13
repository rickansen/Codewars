const solve = s => s.replace(/[a-z]/g, '').length > s.length / 2 ? s.toUpperCase() : s.toLowerCase()

console.log(solve("code"),"code");
console.log(solve("CODe"),"CODE");
console.log(solve("COde"),"code");
console.log(solve("Code"),"code");