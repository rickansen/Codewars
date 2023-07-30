function solution(str) {
  str = [...str].map((x) => x.charCodeAt() - 96);
  let arr = [str[0] + 1 === str[1] ? [str[0]] : str[0]],
    ind = str[0] > str[1] ? 1 : 0;
  for (let i = 1; i < str.length; i++) {
    if (str[i + 1] === str[i] + 1 || str[i - 1] === str[i] - 1) {
      if (!Array.isArray(arr[ind])) {
        arr[ind] = [str[i]];
      } else {
        arr[ind].push(str[i]);
      }
    } else {
      arr.push([str[i]]);
      ind = i;
      continue;
    }
  }
  return arr;
}

console.log(solution('xabc'), 'xcba');
console.log(solution('abcxdef'), 'cbaxfed');
console.log(solution('abcxyz'), 'cbazyx');
console.log(solution('zahimzmstaz'), 'zaihmzmtsaz');
console.log(solution('jjjjjjjjklmnopqrstuv'), 'jjjjjjjvutsrqponmlkj');
console.log(solution('zyx'), 'zyx');
console.log(solution('ppqqrr'), 'pqprqr');
console.log(solution('gjaababbboo'), 'gjabababboo');
