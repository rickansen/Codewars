const uncollapse = (digits) =>
  digits
    .match(
      /(zero)|(one)|(two)|(three)|(four)|(five)|(six)|(seven)|(eight)|(nine)/g
    )
    .join(' ');

console.log(uncollapse('three'), 'three');
console.log(uncollapse('eightsix'), 'eight six');
console.log(uncollapse('fivefourseven'), 'five four seven');
console.log(uncollapse('ninethreesixthree'), 'nine three six three');
console.log(uncollapse('foursixeighttwofive'), 'four six eight two five');
