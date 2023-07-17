const wordList = [
  'strength',
  'afterwards',
  'background',
  'photograph',
  'successful',
  'understand',
];
const wantedWords = (n, m, forbid_let) =>
  wordList.filter(
    (x) =>
      [...x].filter((a) => /[aeiou]/.test(a)).length === n &&
      [...x].filter((a) => /[^aeiou]/.test(a)).length === m &&
      forbid_let.every((a) => !x.includes(a))
  );

console.log(wantedWords(1, 7, ['m', 'y']), ['strength']);
console.log(wantedWords(3, 7, ['m', 'y']), [
  'afterwards',
  'background',
  'photograph',
  'successful',
  'understand',
]);
console.log(wantedWords(3, 7, ['a', 's', 'm', 'y']), []);
