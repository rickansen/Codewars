function separateLiquids(glass) {
  if (glass.length === 0) return [];
  const liquid = {
    H: 1.36,
    W: 1,
    A: 0.87,
    O: 0.8,
  };
  const all = glass.reduce((a, b) => a.concat(b));
  const sort = all.sort((a, b) => liquid[a] - [liquid[b]]);
  let arr = [];

  for (let i = 0; i < glass.length; i++) {
    arr.push(
      sort.slice(glass[0].length * i, glass[0].length * i + glass[0].length)
    );
  }

  return arr;
}
