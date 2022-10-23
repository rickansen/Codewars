/// Solution 1

snail = function (array) {
  if (array[0].length === 0) return [];
  const loop =
    array.length % 2 === 0
      ? array.length / 2
      : Math.floor(array.length / 2) + 1;

  let limitX = 0,
    limitY = 0;

  let x = 0,
    y = 0;

  let traversed = [];
  let coordinates = new Set();

  function goRight() {
    while (x < array[0].length - limitX) {
      if (!coordinates.has(`${x}${y}`)) {
        traversed.push(array[y][x]);
        coordinates.add(`${x}${y}`);
      }
      x++;
    }
    limitX++;
    x--;
  }

  function goDown() {
    while (y < array.length - limitY) {
      if (!coordinates.has(`${x}${y}`)) {
        traversed.push(array[y][x]);
        coordinates.add(`${x}${y}`);
      }
      y++;
    }
    limitY++;
    y--;
  }

  function goLeft() {
    while (x >= limitX - 1) {
      if (!coordinates.has(`${x}${y}`)) {
        traversed.push(array[y][x]);
        coordinates.add(`${x}${y}`);
      }
      x--;
    }
    x++;
  }

  function goUp() {
    while (y >= limitY - 1) {
      if (!coordinates.has(`${x}${y}`)) {
        traversed.push(array[y][x]);
        coordinates.add(`${x}${y}`);
      }
      y--;
    }
    y++;
  }

  for (let i = 0; i <= loop; i++) {
    goRight();
    goDown();
    goLeft();
    goUp();
    x++;
    y++;
  }

  return traversed;
};

// Solution 2

snail = function (array) {
  let traversed = [];

  while (array.length) {
    traversed.push(...array.shift());
    if (array.length) traversed.push(...array.map((row) => row.pop()));
    if (array.length) traversed.push(...array.pop().reverse());
    if (array.length)
      traversed.push(...array.map((row) => row.shift()).reverse());
  }

  return traversed;
};
