// Solution 1
const breakChocolate = (n, m) => (n * m - 1 < 0 ? 0 : n * m - 1);

// Test Case
console.log(breakChocolate(5, 5), 24);
console.log(breakChocolate(1, 1), 0);
