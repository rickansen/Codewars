// Solution 1

function tongues(code) {
  const smallVowels = ['a', 'i', 'y', 'e', 'o', 'u'];
  const capVowels = ['A', 'I', 'Y', 'E', 'O', 'U'];
  const smallConsonants = [
    'b',
    'k',
    'x',
    'z',
    'n',
    'h',
    'd',
    'c',
    'w',
    'g',
    'p',
    'v',
    'j',
    'q',
    't',
    's',
    'r',
    'l',
    'm',
    'f',
  ];
  const capConsonants = [
    'B',
    'K',
    'X',
    'Z',
    'N',
    'H',
    'D',
    'C',
    'W',
    'G',
    'P',
    'V',
    'J',
    'Q',
    'T',
    'S',
    'R',
    'L',
    'M',
    'F',
  ];
  return [...code]
    .map((x, y, z) => {
      const smallRe = /[a-z]/;
      const capRe = /[A-Z]/;

      if (!smallRe.test(x) && !capRe.test(x)) return x;

      if (smallRe.test(x)) {
        return smallVowels.includes(x)
          ? smallVowels[(smallVowels.indexOf(x) + 3) % 6]
          : smallConsonants[(smallConsonants.indexOf(x) + 10) % 20];
      }
      return capVowels.includes(x)
        ? capVowels[(capVowels.indexOf(x) + 3) % 6]
        : capConsonants[(capConsonants.indexOf(x) + 10) % 20];
    })
    .join('');
}

// Test Cases

console.log(
  tongues('Ita dotf ni dyca nsaw ecc.'),
  'One ring to rule them all.'
);
console.log(
  tongues(
    'Tim oh nsa nowa gid ecc fiir wat ni liwa ni nsa eor ig nsaod liytndu.'
  ),
  'Now is the time for all good men to come to the aid of their country.'
);
console.log(
  tongues('Giydhlida etr hakat uaedh efi iyd gidagensadh pdiyfsn ytni nsoh'),
  'Fourscore and seven years ago our forefathers brought unto this'
);
console.log(tongues('litnotatn e tam tenoit.'), 'continent a new nation.');
console.log(
  tongues('Nsa zyolv pdimt gij xywbar ikad nsa cequ rifh.'),
  'The quick brown fox jumped over the lazy dogs.'
);
console.log(
  tongues(
    'Tywpadh (1234567890) etr bytlnyenoit, nsau hsiycr pins pa ytlsetfar!'
  ),
  'Numbers (1234567890) and punctuation, they should both be unchanged!'
);
console.log(tongues(' '), ' ');
console.log(
  tongues('Nsoh oh tin Vcotfit pyn on liycr pa e roggadatn gidaoft cetfyefa.'),
  'This is not Klingon but it could be a different foreign language.'
);
console.log(
  tongues(
    '0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789'
  ),
  '0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789'
);
console.log(
  tongues(
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
  ),
  'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
);
console.log(
  tongues(
    'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm'
  ),
  'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'
);
console.log(tongues('z'), 'q');
console.log(tongues('n'), 't');
console.log(
  tongues(
    '****************************************************************************************************'
  ),
  '****************************************************************************************************'
);
console.log(
  tongues(
    'q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1'
  ),
  'z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1'
);
