function decode(r) {
  let slice = r.match(/[a-z]/).index;
  let n = +r.slice(0, slice);
  let arr = [...r.slice(slice)].map((x) => x.charCodeAt() - 97);
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < 26; j++) {
      if ((n * j) % 26 == arr[i]) {
        res.push(String.fromCharCode(j + 97));
      }
      continue;
    }
  }

  return res.length !== arr.length ? 'Impossible to decode' : res.join('');
}

console.log(
  decode('1273409kuqhkoynvvknsdwljantzkpnmfgf'),
  'uogbucwnddunktsjfanzlurnyxmx'
);
console.log(
  decode('1544749cdcizljymhdmvvypyjamowl'),
  'mfmwhbpoudfujjozopaugcb'
);
console.log(decode('105860ymmgegeeiwaigsqkcaeguicc'), 'Impossible to decode');
console.log(
  decode('1122305vvkhrrcsyfkvejxjfvafzwpsdqgp'),
  'rrsxppowmjsrclfljrajtybwviqb'
);
console.log(decode('6015ekx'), 'mer');
console.log(decode('5057aan'), 'Impossible to decode');

//     encode("mer", 6015)  -->  "6015ekx"

// m --> 12,   12 * 6015 % 26 = 4,    4  --> e
// e --> 4,     4 * 6015 % 26 = 10,   10 --> k
// r --> 17,   17 * 6015 % 26 = 23,   23 --> x

// So we get "ekx", hence the output is "6015ekx"
