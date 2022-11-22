// Solution 1: Open

var soundex = function (names) {
  names = names.toLowerCase();
  let first = names
    .split(' ')
    .map((x) => `${x[0]}${x.slice(1).replace(/[hw]/g, '')}`);
  let second = first
    .join(' ')
    .replace(/[bfpv]/g, 1)
    .replace(/[cgjkqsxz]/g, 2)
    .replace(/[dt]/g, 3)
    .replace(/[l]/g, 4)
    .replace(/[mn]/g, 5)
    .replace(/[r]/g, 6)
    .split('');
  let third = second.filter((x, i) => i == 0 || !(second[i - 1] == x)).join('');
  let fourth = third
    .split(' ')
    .map((x) => `${x[0]}${x.slice(1).replace(/[aeiouy]/g, '')}`);
  let fifth = fourth.map((x, y) =>
    [...x].map((a, b) => (b === 0 && /\d/.test(a) ? names.split(' ')[y][0] : a))
  );
  let sixth = fifth
    .map((x) =>
      x.length < 4
        ? `${x.join('')}${'0'.repeat(4 - x.length)}`
        : x.slice(0, 4).join('')
    )
    .join(' ')
    .toUpperCase();
  return sixth;
};

// Test Cases

console.log(soundex('sarah Connor'), 'S600 C560');
console.log(soundex('Sara Conar'), 'S600 C560');
console.log(soundex('Serah Coner'), 'S600 C560');
console.log(soundex('Sarh Connor'), 'S600 C560');
console.log(soundex('Sayra Cunnarr'), 'S600 C560');
console.log(
  soundex('ppyxt qfftxdpkmfzpvfozafvi lkbmzzxcqq hjrfpd'),
  'P230 Q132 L215 H261'
);
console.log(
  soundex('isrxuuuhyvpsk itrzcka whxgaltxrokcfrtheo nbydighfkqfowusegd'),
  'I262 I362 W243 N132'
);
