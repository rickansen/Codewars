// // Solution 1: Too Slow
function addedChar(s1, s2) {
  s1 = [...s1];
  for (let i = 0; i < s1.length; i++) {
    s2 = s2.replace(s1[i], '');
  }

  return s2[0];
}

console.log(addedChar('hello', 'aaahello'), 'a');
console.log(addedChar('abcde', '2db2a2ec'), '2');
console.log(addedChar('aabbcc', 'aacccbbcc'), 'c');
