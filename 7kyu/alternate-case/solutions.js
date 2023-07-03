const alternateCase = (s) =>
  [...s]
    .map((x) => (/[a-z]/.test(x) ? x.toUpperCase() : x.toLowerCase()))
    .join('');

console.log(alternateCase('abc'), 'ABC');
console.log(alternateCase('ABC'), 'abc');
console.log(alternateCase('Hello World'), 'hELLO wORLD');
