function dashatize(num) {
  if (Number.isNaN(+num)) return 'NaN';
  num = [
    ...[...String(num > 0 ? num : num * -1)]
      .map((x) => (+x % 2 === 0 ? +x : `-${+x}-`))
      .join(''),
  ];

  num[0] === '-' ? num.shift() : num;
  num[num.length - 1] === '-' ? num.pop() : num;

  num = num.join('');
  while (num.includes('--')) {
    num = num.replace('--', '-');
  }
  return num;
}
