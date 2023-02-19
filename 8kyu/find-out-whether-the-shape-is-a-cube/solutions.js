var cubeChecker = (volume, side) => volume > 0 ? side ** 3 === volume : false

console.log(cubeChecker(56.3, 1), false);
console.log(cubeChecker(-1, 2), false);
console.log(cubeChecker(8, 3), false);
console.log(cubeChecker(8, 2), true);
console.log(cubeChecker(-8,-2), false);
console.log(cubeChecker(0, 0), false);
console.log(cubeChecker(1, 5),  false);
console.log(cubeChecker(125, 5), true);
console.log(cubeChecker(125,-5), false);