function zeroPlentiful(arr) {
  let length = arr
    .map((x) => (x !== 0 ? ' ' : x))
    .join('')
    .split(' ')
    .filter((x) => x)
    .map((x) => x.length);
  return length.every((x) => x >= 4) ? length.length : 0;
}
