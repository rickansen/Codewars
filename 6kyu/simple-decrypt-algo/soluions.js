function decrypt(encryption) {
  const letters = [...encryption].filter((x) => /[a-z]/.test(x));
  const set = Array.from(new Set(letters));
  const instance = set.map((x) => [
    x.charCodeAt() - 96,
    letters.filter((a) => a === x).length,
  ]);
  return Array(26)
    .fill(1)
    .map((x, y) => instance.find((a) => a[0] === x + y))
    .map((x) => (x ? x[1] : 0))
    .join('');
}
