function reverseVowels(str) {
  let vows = [...str].filter((x) => /[aeiou]/i.test(x));
  return [...str].map((x, y) => (/[aeiou]/i.test(x) ? vows.pop() : x)).join('');
}

console.log(reverseVowels('Hello!'), 'Holle!');
console.log(reverseVowels('Tomatoes'), 'Temotaos');
console.log(
  reverseVowels('Reverse Vowels In A String'),
  'RivArsI Vewols en e Streng'
);
