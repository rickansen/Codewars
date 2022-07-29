function phone(strng, num) {
  let filter = strng.split('\n').filter((x) => x.includes(num));
  if (filter.length === 0) return `Error => Not found: ${num}`;
  else if (filter.length > 1) return `Error => Too many people: ${num}`;
  filter = filter
    .map((x) => x.split(' '))
    .join('')
    .split(',');

  const regex = new RegExp(/[0-9-]/);
  const regex2 = new RegExp(/[0-9a-z.-]/i);
  const phone = filter
    .filter((x) => x.includes('+'))[0]
    .split('')
    .filter((x) => regex.test(x))
    .join('');
  const name = filter
    .filter((x) => x.includes('<') || x.includes('>'))
    .join(' ')
    .replace(/[<>]/g, '')
    .trim();
  const address = filter
    .filter((x) => !x.includes(num) && !x.includes('<') && !x.includes('>'))
    .filter((x) => x)
    .map((x) =>
      x
        .split('')
        .map((a) => (regex2.test(a) ? a : ' '))
        .join('')
    )
    .join(' ')
    .replace('  ', ' ')
    .trim();
  return `Phone => ${phone}, Name => ${name}, Address => ${address}`;
}
