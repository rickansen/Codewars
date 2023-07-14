const bears = (x, s) =>
  !s.match(/B8|8B/g)
    ? ['', x === 0]
    : [s.match(/B8|8B/g).join(''), s.match(/B8|8B/g).length >= x];

console.log(bears(7, '8j8mBliB8gimjB8B8jlB'), ['B8B8B8', false]);
console.log(bears(3, '88Bifk8hB8BB8BBBB888chl8BhBfd'), ['8BB8B8B88B', true]);
console.log(bears(8, '8'), ['', false]);
console.log(bears(0, 'd8BfBfBdmB8jm8B8il888kBl8m'), ['8BB88B', true]);
console.log(bears(0, '8j888aam'), ['', true]);
