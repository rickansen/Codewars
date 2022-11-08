function strToHash(str) {
  if (str === '') return {};
  let split = str
      .split(', ')
      .map((x) => x.split('=').map((a, b) => (b === 1 ? +a : a))),
    obj = {};
  for (let i = 0; i < split.length; i++) {
    obj[split[i][0]] = split[i][1];
  }
  return obj;
}
