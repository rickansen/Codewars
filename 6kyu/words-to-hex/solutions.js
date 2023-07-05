const wordsToHex = (words) =>
  words
    .split(' ')
    .map((x) => [...x.slice(0, 3)].map((a) => a.charCodeAt().toString(16)))
    .map((x) => (x.length !== 3 ? x.concat(Array(3 - x.length).fill('00')) : x))
    .map((x) => `#${x.join('')}`);

console.log(wordsToHex('Hello, my name is Gary and I like cheese.'), [
  '#48656c',
  '#6d7900',
  '#6e616d',
  '#697300',
  '#476172',
  '#616e64',
  '#490000',
  '#6c696b',
  '#636865',
]);
// console.log(
//     wordsToHex("0123456789"), [ '#303132' ]);
// console.log(
//     wordsToHex("ThisIsOneLongSentenceThatConsistsOfWords"), [ '#546869' ]);
// console.log(
//     wordsToHex("Blah blah blah blaaaaaaaaaaaah"), [ '#426c61', '#626c61', '#626c61', '#626c61' ]);
// console.log(
//     wordsToHex("&&&&& $$$$$ ^^^^^ @@@@@ ()()()()("), [ '#262626', '#242424', '#5e5e5e', '#404040', '#282928' ]);
