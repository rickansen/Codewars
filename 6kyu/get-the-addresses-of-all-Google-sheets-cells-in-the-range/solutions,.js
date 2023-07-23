function getCellAddresses(range) {
  // loop is (letter minus letter + 1) * (number - number + 1)
  let numericCell = range
    .split(':')
    .map((x) => [x.match(/[A-Z]/)[0].charCodeAt() - 64, +x.match(/\d{1,}/)[0]]);
  let columnLength = numericCell[1][0] - numericCell[0][0] + 1;
  let rowLength = numericCell[1][1] - numericCell[0][1] + 1;
  let arr = [];

  if (
    columnLength < 1 ||
    rowLength < 1 ||
    range.split(':')[0] === range.split(':')[1]
  )
    return [];

  for (let i = 0; i < columnLength * rowLength; i++) {
    if (columnLength === 1 || rowLength === 1) {
      arr.push(
        `${String.fromCharCode(
          numericCell[0][0] + 64 + (rowLength === 1 ? i : 0)
        )}${+numericCell[0][1] + (columnLength === 1 ? i : 0)}`
      );
    } else {
      arr.push(
        `${String.fromCharCode(
          numericCell[0][0] + 64 + (i % (numericCell[0][0] - 1))
        )} ${+numericCell[0][1] + (i % (numericCell[0][1] - 1))} ${
          (i + 1) / numericCell[0][0]
        }`
      );
    }

    //String.fromCharCode(numericCell[0][1] + (i % (numericCell[0][1] - 1)) )
  }

  return arr;
}

//console.log(getCellAddresses("A1:A10"), ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10']);
//console.log(getCellAddresses("A1:Z1"), ["A1", "B1", "C1", "D1", "E1", "F1", "G1", "H1", "I1", "J1", "K1", "L1", "M1", "N1", "O1", "P1", "Q1", "R1", "S1", "T1", "U1", "V1", "W1", "X1", "Y1", "Z1"]);
console.log(getCellAddresses('F12:J17'), [
  'F12',
  'G12',
  'H12',
  'I12',
  'J12',
  'F13',
  'G13',
  'H13',
  'I13',
  'J13',
  'F14',
  'G14',
  'H14',
  'I14',
  'J14',
  'F15',
  'G15',
  'H15',
  'I15',
  'J15',
  'F16',
  'G16',
  'H16',
  'I16',
  'J16',
  'F17',
  'G17',
  'H17',
  'I17',
  'J17',
]);
console.log(getCellAddresses('B3:D5'), [
  'B3',
  'C3',
  'D3',
  'B4',
  'C4',
  'D4',
  'B5',
  'C5',
  'D5',
]);
console.log(getCellAddresses('A1:B2'), ['A1', 'B1', 'A2', 'B2']);

console.log(getCellAddresses('W118:Z124'), [
  'W118',
  'X118',
  'Y118',
  'Z118',
  'W119',
  'X119',
  'Y119',
  'Z119',
  'W120',
  'X120',
  'Y120',
  'Z120',
  'W121',
  'X121',
  'Y121',
  'Z121',
  'W122',
  'X122',
  'Y122',
  'Z122',
  'W123',
  'X123',
  'Y123',
  'Z123',
  'W124',
  'X124',
  'Y124',
  'Z124',
]);
console.log(getCellAddresses('H7:F3'), []);
console.log(getCellAddresses('C2:C2'), []);
