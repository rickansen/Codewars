function anagramDifference(w1, w2) {
  let i = 0;
  if (
    w1.length === 0 ||
    w2.length === 0 ||
    ![...w1].some((x) => w2.includes(x))
  )
    return w1.length + w2.length;
  (w1 = [...w1]), (w2 = [...w2]);

  for (let i = 0; i < w1.length; i++) {
    if (w2.includes(w1[i])) {
      w2[w2.indexOf(w1[i])] = '';
      w1[i] = '';
    }
    continue;
  }

  return [w1.join(''), w2.join('')].join('').length;
}

console.log(anagramDifference('', ''), 0);
console.log(anagramDifference('a', ''), 1);
console.log(anagramDifference('', 'a'), 1);
console.log(anagramDifference('ab', 'a'), 1);
console.log(anagramDifference('ab', 'cd'), 4);
console.log(anagramDifference('aab', 'a'), 2);
console.log(anagramDifference('a', 'aab'), 2);
console.log(anagramDifference('codewars', 'hackerrank'), 10);
console.log(
  anagramDifference(
    'ukzdnncjjbccsqbhegnhsbdfqiovzilsrrrkqdw',
    'sfrjrzrlskfzlmrexiltgnihnksjkijnuzwyuyhzzwwkgyrpvnzwtydma'
  ),
  42
);
