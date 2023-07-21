const towerBuilder = (nFloors, nBlockSz) =>
  Array(nFloors)
    .fill('*')
    .map((x, y) =>
      Array(nBlockSz[1])
        .fill('*')
        .map(
          (a) =>
            `${' '.repeat((nFloors - 1 - y) * nBlockSz[0])}${'*'.repeat(
              nBlockSz[0] + nBlockSz[0] * (y + y)
            )}${' '.repeat((nFloors - 1 - y) * nBlockSz[0])}`
        )
    )
    .reduce((a, c) => a.concat(c));

console.log(towerBuilder(1, [1, 1]), ['*']);
console.log(towerBuilder(3, [4, 2]), [
  '        ****        ',
  '        ****        ',
  '    ************    ',
  '    ************    ',
  '********************',
  '********************',
]);
