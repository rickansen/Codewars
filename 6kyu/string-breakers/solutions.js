function stringBreakers(n, string) {
  let arr = [];

  string = [...string].filter((x) => x !== ' ').join('');
  for (let i = 0; i < string.length / n; i++) {
    arr.push([...string].slice(i * n, i * n + n).join(''));
  }

  return arr.join('\n');
}
