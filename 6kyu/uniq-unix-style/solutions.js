//Solution: Ugly

function uniq(a) {
  let uniq = [a.shift()];
  let i = 0;
  while (a.length > 0) {
    if (a[0] === uniq[i]) {
      a.shift();
      continue;
    }
    uniq.push(...a.splice(0, 1));
    i++;
  }
  return uniq;
}

// Test Case

console.log(uniq(['a', 'a', 'b', 'b', 'c', 'a', 'b', 'c', 'c']), [
  'a',
  'b',
  'c',
  'a',
  'b',
  'c',
]);

console.log(uniq(['a', 'a', 'a', 'b', 'b', 'b', 'c', 'c', 'c']), [
  'a',
  'b',
  'c',
]);
