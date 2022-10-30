var generateColor = function () {
  const hexVal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let color = [];

  for (let i = 0; i < 6; i++) {
    color.push(hexVal[Math.ceil(Math.random() * (hexVal.length - 1))]);
  }
  return `#${color.join('')}`;
};
