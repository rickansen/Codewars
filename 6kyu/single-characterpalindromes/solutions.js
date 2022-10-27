function solve(s) {
  if ([...s].reverse().join('') === s) return 'OK';
  return [...s]
    .map((x, y) => {
      let removed = [...s].filter((a, b) => b !== y).join('');
      return removed === [...removed].reverse().join('');
    })
    .includes(true)
    ? 'remove one'
    : 'not possible';
}
