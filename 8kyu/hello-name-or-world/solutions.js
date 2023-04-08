const hello = name => `Hello, ${!name ? 'World' : name[0].toUpperCase() + name.slice(1).toLowerCase() }!`

console.log(hello('alice'), 'Hello, Alice!', "returns 'Hello, Alice!' when given 'alice'");
console.log(hello(), 'Hello, World!', "returns 'Hello, World!' when name is not given");
console.log(hello(''), 'Hello, World!', "returns 'Hello, World!' when name is an empty string");
