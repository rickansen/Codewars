function swap(s, n) {
  (n = [...n.toString(2)]), (s = [...s]), (j = 0);

  for (let i = 0; i < s.length; i++) {
    if (/[a-z]/i.test(s[i])) {
      if (n[j] == 1) {
        s[i] = /[a-z]/.test(s[i]) ? s[i].toUpperCase() : s[i].toLowerCase();
      }
      j++;
      j = j % n.length;
    }

    continue;
  }

  return s.join('');
}

console.log(swap('Hello world!', 11), 'heLLO wORLd!');
console.log(
  swap('the quick broWn fox leapt over the fence', 9),
  'The QUicK BrowN foX LeaPT ovER thE FenCE'
);
console.log(swap('eVerybody likes ice cReam', 85), 'EVErYbODy LiKeS IcE creAM');
console.log(swap('gOOd MOrniNg', 7864), 'GooD MorNIng');
console.log(swap('how are you today?', 12345), 'HOw are yoU TOdaY?');
console.log(swap('the lord of the rings', 0), 'the lord of the rings');
console.log(swap('', 11345), '');
