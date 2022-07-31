var orderedCount = function (text) {
  if (text.length === 0) return [];
  let map = new Map();
  for (let char of text) {
    if (!map.has(char)) {
      map.set(char, 1);
    } else {
      map.set(char, map.get(char) + 1);
    }
  }
  const res = [];

  for (let [key, value] of map.entries()) {
    res.push([key, value]);
  }

  return res;
};
