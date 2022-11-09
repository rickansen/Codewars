const camelize = (str) =>
  str
    .split(/[^\w]|_/g)
    .filter((x) => x !== '')
    .map((x) => `${x[0].toUpperCase()}${x.slice(1).toLowerCase()}`)
    .join('');
