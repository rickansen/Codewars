const rotate = (str) =>
  Array([...str].length)
    .fill('')
    .map((x, y) => str.slice(y + 1).concat(str.slice(0, y + 1)));
