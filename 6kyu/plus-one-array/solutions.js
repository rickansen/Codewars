function upArray(arr) {
  if (arr.some((x) => x < 0 || x > 9)) return null;

  arr = arr.map((x, y) => (y === arr.length - 1 ? x + 1 : x));

  while (arr.some((x) => x > 9)) {
    arr = arr.map((x, y, z) => {
      if (z[y + 1] === 10) {
        x += 1;
        return x;
      } else if (x === 10) {
        return 0;
      } else {
        return x;
      }
    });
    if (arr[0] > 9) break;
  }

  return arr[0] === 10
    ? String(arr[0])
        .split('')
        .concat(arr.slice(1))
        .map((x) => +x)
    : arr;
}
