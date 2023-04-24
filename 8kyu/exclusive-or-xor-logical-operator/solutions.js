const xor = (a, b) => !!(a^b)

console.log(xor(false, false), false, "false xor false");
console.log(xor(true, false), true, "true xor false");
console.log(xor(false, true), true, "false xor true");
console.log(xor(true, true), false, "true xor true");

