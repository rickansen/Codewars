const drawStairs = (n) =>
  Array(n)
    .fill('I')
    .map((x, y) => ' '.repeat(y) + x)
    .join('\n');

console.log(
  drawStairs(1),
  'I',
  "The first step has no padding on the left, just an 'I'"
);
console.log(
  drawStairs(3),
  'I\n I\n  I',
  "There's something wrong with these 3 steps"
);
console.log(drawStairs(5), 'I\n I\n  I\n   I\n    I', '5-step stairs no good');
