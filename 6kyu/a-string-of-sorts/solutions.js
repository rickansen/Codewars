// Solution 1

function sortString(string, ordering) {
  let order = [...new Set(ordering)];
  let included = [...string].filter((x) => order.includes(x));
  let notIncluded = [...string].filter((x) => !order.includes(x));
  return order
    .map((x) => included.filter((a) => a === x).join(''))
    .concat(notIncluded)
    .join('');
}

// Test Cases

console.log(sortString('foos', 'of'), 'oofs');
console.log(sortString('string', 'gnirts'), 'gnirts');
console.log(sortString('banana', 'abn'), 'aaabnn');
