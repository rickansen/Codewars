function getCard() {
  let arr = [[], [], [], [], []];
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      const rand = Math.ceil(Math.random() * 15);
      const rand2 = Math.ceil(Math.random() * 5);
      arr[i].length === 0
        ? (arr[i][j] = rand + i * 15)
        : (arr[i][j] = genRandom(arr[i], rand + i * 15, i)[rand2]);
    }
  }
  arr = arr
    .map((x, y) =>
      x.map((a) =>
        y === 0
          ? `B${a}`
          : y === 1
          ? `I${a}`
          : y === 2
          ? `N${a}`
          : y === 3
          ? `G${a}`
          : `O${a}`
      )
    )
    .reduce((a, b) => a.concat(b));
  arr.splice(11, 1);
  return arr;

  function genRandom(arr, x, ind) {
    let array = [];
    for (let i = ind * 15 + 1; i <= ind * 15 + 15; i++) {
      array.push(i);
    }
    array = array.filter((x) => !arr.includes(x));
    return array;
  }
}
