function stringExpansion(s) {
  if ([...s].every((x) => /[a-z]/i.test(x))) return s;
  return [...s]
    .map((x, y) => {
      let instance = [...s]
        .slice(0, y + 1)
        .reverse()
        .find((a) => /\d/.test(a));
      return /\d/.test(x) ? '' : !instance ? x : x.repeat(instance);
    })
    .join('');
}
