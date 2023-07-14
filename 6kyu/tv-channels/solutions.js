function redarr(arr) {
  arr = [...new Set(arr.sort())];
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    obj[i] = arr[i];
  }

  return obj;
}

console.log(redarr(['BBC1', 'BBC2', 'MTV']), {
  0: 'BBC1',
  1: 'BBC2',
  2: 'MTV',
});
console.log(redarr(['BBC1', 'BBC1', 'BBC2', 'MTV']), {
  0: 'BBC1',
  1: 'BBC2',
  2: 'MTV',
});
