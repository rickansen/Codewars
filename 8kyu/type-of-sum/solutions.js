const powerOf4 = (n) =>
  typeof n === 'number' ? n === 4 || Math.pow(n, 1 / 4) % 1 === 0 : false;
