function longest(str) {
  let arr = [];
  str = [...str].map((x) => x.charCodeAt());

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= str[i - 1]) {
      arr[arr.length - 1].push(String.fromCharCode(str[i]));
    } else {
      arr.push([String.fromCharCode(str[i])]);
    }
  }

  return arr
    .find((x) => x.length === Math.max(...arr.map((x) => x.length)))
    .join('');
}

console.log(longest('asd'), 'as');
console.log(longest('nab'), 'ab');
console.log(longest('abcdeapbcdef'), 'abcde');
console.log(longest('asdfaaaabbbbcttavvfffffdf'), 'aaaabbbbctt');
console.log(longest('asdfbyfgiklag'), 'fgikl');
console.log(longest('z'), 'z');
console.log(longest('zyba'), 'z');
