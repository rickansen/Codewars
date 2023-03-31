const validateHello= greetings => /hello|ciao|salut|hallo|hola|ahoj|czesc/i.test(greetings)

console.log(validateHello('ahoj'), true);
console.log(validateHello('meh'), false);
