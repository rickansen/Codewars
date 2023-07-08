/**
 * Utility class for Harshad numbers (also called Niven numbers).
 *
 * @namespace Harshad
 */
var Harshad = (function () {
  'use strict';

  return {
    isValid: function (x) {
      return x < 10
        ? true
        : x % [...String(x)].reduce((a, c) => a + +c, 0) === 0;
    },

    getNext: function (x) {
      if (x < 10) return x + 1;
      x++;

      while (!Harshad.isValid(x)) {
        x++;
      }

      return x;
    },

    getSerie: function (x, y) {
      let arr = [];
      let start = y ? y : 0;

      while (arr.length !== x) {
        arr.push(Harshad.getNext(start));
        start = Harshad.getNext(start);
      }
      return arr;
    },
  };
})();

console.log(Harshad.getSerie(10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(
  Harshad.getSerie(20),
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, 20, 21, 24, 27, 30, 36, 40, 42]
);
console.log(
  Harshad.getSerie(10, 1000),
  [1002, 1008, 1010, 1011, 1012, 1014, 1015, 1016, 1017, 1020]
);
console.log(Harshad.isValid(1), true);
console.log(Harshad.isValid(18), true);
console.log(Harshad.isValid(19), false);
console.log(Harshad.getNext(1), 2);
console.log(Harshad.getNext(18), 20);
console.log(Harshad.getNext(1000), 1002);
