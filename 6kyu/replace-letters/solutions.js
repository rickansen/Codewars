const replaceLetters = (word) =>
  [...word]
    .map((x) =>
      /[vwxyz]/.test(x)
        ? 'a'
        : x === 'a'
        ? 'z'
        : vowels.includes(x)
        ? alphabet
            .slice(0, alphabet.indexOf(x))
            .filter((a) => !vowels.includes(a))
            .reverse()[0]
        : alphabet
            .slice(alphabet.indexOf(x))
            .filter((a) => !consonants.includes(a))[0]
    )
    .join('');

console.log(replaceLetters('cat'), 'ezu');
console.log(replaceLetters('codewars'), 'enedazuu');
console.log(replaceLetters('abcdtuvwxyz'), 'zeeeutaaaaa');
