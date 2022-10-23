const group = (arr) =>
  Array.from(new Set(arr)).map((x) => arr.filter((a) => a === x));
