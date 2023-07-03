function stringsConstruction(a, b) {
  let total = 0;
  (b = [...b]), (a = [...a]);

  for (let i = 0; i < Math.floor(b.length / a.length); i++) {
    if (a.map((x) => b.filter((a) => a === x).length).every((x) => x > 0)) {
      for (let j = 0; j < a.length; j++) {
        if (b.filter((x) => x !== '').length >= a.length) {
          b[b.indexOf(a[j])] = '';
        } else {
          break;
        }
      }
      total += 1;
    } else {
      break;
    }
  }

  return total;
}

console.log(stringsConstruction('abc', 'abccba'), 2);
console.log(
  stringsConstruction(
    'hnccv',
    'hncvohcjhdfnhonxddcocjncchnvohchnjohcvnhjdhihsn'
  ),
  3
);
console.log(stringsConstruction('abc', 'def'), 0);
console.log(stringsConstruction('zzz', 'zzzzzzzzzzz'), 3);
