function money_value(s) {
  const re = /\d/;
  const re2 = /\d{1,}.\d{1,}|\.\d{1,}|\d{1,}/;
  if (!s.includes('$')) return +s;
  if (!re.test(s)) return 0.0;
  return s.match(re2)[0];
  //[...s].filter(x => re).join('')
}

console.log(money_value('12.34'), 12.34);
console.log(money_value(' $5.67'), 5.67);
console.log(money_value('-0.89'), -0.89);
console.log(money_value('-$ 0.1'), -0.1);
console.log(money_value('$-2.3456'), -2.3456);
console.log(money_value('007'), 7.0);
console.log(money_value(' $ 89'), 89.0);
console.log(money_value('   .11'), 0.11);
console.log(money_value('$.2'), 0.2);
console.log(money_value('-.34'), -0.34);
console.log(money_value('$$$'), 0.0);

// 12.34
//  $5.67
// -0.89
// -$ 0.1
// $-2.3456
// 007
//  $ 89
//    .11
// $.2
// -.34
// $$$
