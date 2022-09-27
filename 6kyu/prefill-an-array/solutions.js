function prefill(n, v) {
  if (
    Number.isNaN(+n) ||
    n === Infinity ||
    n % 1 !== 0 ||
    n < 0 ||
    typeof n === 'boolean'
  )
    throw TypeError(`${n} is invalid`);
  return Array(+n).fill(v);
}
