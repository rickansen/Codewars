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

  //   goRight();
  //   goDown();
  //   goLeft();
  //   goUp();

  return traversed;
};

console.log(snail([[]]), []);
console.log(snail([[1]]), [1]);
console.log(
  snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
  [1, 2, 3, 6, 9, 8, 7, 4, 5]
);
console.log(
  snail([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ]),
  [
    1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19,
    18, 17, 12, 13,
  ]
);
console.log(
  snail([
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [19, 32, 33, 34, 25, 8],
    [18, 31, 36, 35, 26, 9],
    [17, 30, 29, 28, 27, 10],
    [16, 15, 14, 13, 12, 11],
  ]),
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
  ]
);

console.log(
  snail([
    [1, 2, 3, 1],
    [4, 5, 6, 4],
    [7, 8, 9, 7],
    [7, 8, 9, 7],
  ]),
  [1, 2, 3, 1, 4, 7, 7, 9, 8, 7, 7, 4, 5, 6, 9, 8]
);

console.log(
  snail([
    [696, 735, 769, 782, 228, 777, 162, 65, 228, 57, 453, 451, 991],
    [658, 819, 514, 708, 34, 72, 459, 201, 992, 524, 472, 355, 634],
    [196, 434, 567, 917, 320, 402, 917, 654, 336, 524, 524, 400, 657],
    [43, 375, 507, 945, 413, 21, 663, 46, 73, 313, 205, 629, 856],
    [728, 788, 764, 967, 241, 406, 457, 827, 824, 369, 327, 755, 134],
    [414, 421, 328, 663, 743, 707, 247, 217, 851, 956, 508, 938, 746],
    [662, 650, 10, 369, 491, 924, 682, 768, 594, 853, 915, 708, 461],
    [746, 462, 277, 470, 437, 589, 538, 438, 948, 103, 400, 363, 875],
    [1000, 829, 493, 243, 957, 203, 420, 429, 388, 819, 339, 57, 568],
    [759, 791, 209, 70, 999, 8, 132, 882, 546, 67, 656, 460, 184],
    [933, 414, 343, 72, 383, 895, 476, 356, 197, 592, 826, 675, 12],
    [403, 147, 162, 858, 671, 217, 412, 110, 285, 632, 465, 748, 973],
    [935, 30, 385, 394, 453, 272, 807, 45, 623, 492, 32, 746, 344],
  ]),
  [
    696, 735, 769, 782, 228, 777, 162, 65, 228, 57, 453, 451, 991, 634, 657,
    856, 134, 746, 461, 875, 568, 184, 12, 973, 344, 746, 32, 492, 623, 45, 807,
    272, 453, 394, 385, 30, 935, 403, 933, 759, 1000, 746, 662, 414, 728, 43,
    196, 658, 819, 514, 708, 34, 72, 459, 201, 992, 524, 472, 355, 400, 629,
    755, 938, 708, 363, 57, 460, 675, 748, 465, 632, 285, 110, 412, 217, 671,
    858, 162, 147, 414, 791, 829, 462, 650, 421, 788, 375, 434, 567, 917, 320,
    402, 917, 654, 336, 524, 524, 205, 327, 508, 915, 400, 339, 656, 826, 592,
    197, 356, 476, 895, 383, 72, 343, 209, 493, 277, 10, 328, 764, 507, 945,
    413, 21, 663, 46, 73, 313, 369, 956, 853, 103, 819, 67, 546, 882, 132, 8,
    999, 70, 243, 470, 369, 663, 967, 241, 406, 457, 827, 824, 851, 594, 948,
    388, 429, 420, 203, 957, 437, 491, 743, 707, 247, 217, 768, 438, 538, 589,
    924, 682,
  ]
);
