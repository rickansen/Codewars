var recoverSecret = function (triplets) {
  let res = [...triplets[0]];
  for (let i = 1; i < triplets.length; i++) {
    if (triplets[i].every((x) => !res.includes(x))) {
      res.push(...triplets[i]);
      continue;
    }

    let copy = triplets[i].map((x, y) =>
      res.includes(x) ? res.indexOf(x) : ''
    );
    let diff = Math.max(...copy) - Math.min(...copy);
    let range = copy.filter((x) => x !== '');
    let down = range.map((x, y, z) => x > z[y + 1]).indexOf(true);

    if (diff === 1) {
      res.splice(range[0], 2, ...triplets[i]);
      continue;
    }

    let temp = res[Math.max(...range)];
    let splice =
      down === 0
        ? [...`${temp}${res[Math.min(...range)]}`]
        : [...`${res[Math.min(...range)]}${temp}`];
    res.splice(Math.max(...range), 1);

    res.splice(Math.min(...range), 1, ...splice);
  }
  return res.join('');
};

secret1 = 'whatisup';
triplets1 = [
  ['t', 'u', 'p'],
  ['w', 'h', 'i'],
  ['t', 's', 'u'],
  ['a', 't', 's'],
  ['h', 'a', 'p'],
  ['t', 'i', 's'],
  ['w', 'h', 's'],
];

console.log(recoverSecret(triplets1), secret1);
