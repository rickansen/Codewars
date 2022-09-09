function decipherThis(str) {
  str = str.split(' ');
  let numArr = str.map((x) => `${x.match(/\d{1,}/)[0]}`);
  return str
    .map((x, y) => x.replace(numArr[y], String.fromCharCode(numArr[y])))
    .map((x) =>
      x.length > 2
        ? [...x]
            .map((a, b) =>
              b === 1 ? x[x.length - 1] : b === x.length - 1 ? x[1] : a
            )
            .join('')
        : x
    )
    .join(' ');
}
