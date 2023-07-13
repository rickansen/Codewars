const catMouse = (x) =>
  x.replace(/\.{1,3}/, '').length === 2 ? 'Caught!' : 'Escaped!';

console.log(catMouse('C....m'), 'Escaped!');
console.log(catMouse('C..m'), 'Caught!');
console.log(catMouse('C.....m'), 'Escaped!');
