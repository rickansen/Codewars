// Solution 1: EH
function count(string) {
  let set = [...new Set(string)];
  let obj = {};
  for (let i = 0; i < set.length; i++) {
    obj[set[i]] = [...string].filter((x) => x === set[i]).length;
  }
  return obj;
}

// Test Cases
console.log(count('aba'), { a: 2, b: 1 });
console.log(count(''), {});
