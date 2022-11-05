const vowelOne = (s) =>
  [...s].map((x) => (/[aeiou]/i.test(x) ? 1 : 0)).join('');
