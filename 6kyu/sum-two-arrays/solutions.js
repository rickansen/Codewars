function addArrays(array1, array2) {
  console.log(array1, array2);
  if (array1.length === 0 && array2.length === 0) return [];
  let num = String(
    +array1.reduce((a, b) => a + b, '') + +array2.reduce((a, b) => a + b, '')
  ).split('');
  return num[0] !== '-'
    ? num.map((x) => +x)
    : [num.slice(0, 2).join('')].concat(num.slice(2)).map((x) => +x);
}
