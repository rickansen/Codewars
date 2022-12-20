// Solution 1
const hexHash = code => [...[...code].map(x => x.charCodeAt().toString(16)).join('')].filter(x => /[\d]/.test(x)).reduce((a,b) => +a + +b, 0)


//Test Case

console.log(hexHash('Yo'), 20);

console.log(hexHash('Hello, World!'), 91);

console.log(hexHash('Forty4Three'), 113);
