function containAllRots(str, arr) {
  if (str === '') return true;
  let tot = 0;

  for (let i = 0; i < str.length; i++) {
    let rot = str.slice(i) + str.slice(0, i - str.length);
    if (arr.includes(rot)) {
      tot++;
    }
  }
  return tot === str.length;
}

console.log(containAllRots('', []), true);
console.log(containAllRots('', ['bsjq', 'qbsj']), true);
console.log(
  containAllRots('bsjq', ['bsjq', 'qbsj', 'sjqb', 'twZNsslC', 'jqbs']),
  true
);
console.log(
  containAllRots('XjYABhR', [
    'TzYxlgfnhf',
    'yqVAuoLjMLy',
    'BhRXjYA',
    'YABhRXj',
    'hRXjYAB',
    'jYABhRX',
    'XjYABhR',
    'ABhRXjY',
  ]),
  false
);
