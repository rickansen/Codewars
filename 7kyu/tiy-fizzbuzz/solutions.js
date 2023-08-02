const tiyFizzBuzz = (sentence) =>
  [...sentence]
    .map((x) =>
      /[BCDFGHJKLMNPQRSTVWXYZ]/.test(x)
        ? 'Iron'
        : /[aeiou]/.test(x)
        ? 'Yard'
        : /[AEIOU]/.test(x)
        ? 'Iron Yard'
        : x
    )
    .join('');

// If a letter is a upper case consonants, replace that character with "Iron".
// If a letter is a lower case consonants or a non-alpha character, do nothing to that character
// If a letter is a upper case vowel, replace that character with "Iron Yard".
// If a letter is a lower case vowel, replace that character with "Yard".

console.log(tiyFizzBuzz(' '), ' ');
console.log(tiyFizzBuzz('H'), 'Iron');
console.log(tiyFizzBuzz('b'), 'b');
console.log(tiyFizzBuzz('A'), 'Iron Yard');
console.log(tiyFizzBuzz('a'), 'Yard');
console.log(
  tiyFizzBuzz('Hello WORLD!'),
  'IronYardllYard IronIron YardIronIronIron!'
);
