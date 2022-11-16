//Solution 1: Wrong amnd not consecutive

// function lookSay(number) {
//   return +Array.from( new Set(String(number)) ).map(x => [[...String(number)].filter(a => a == x).length,x] ).reduce((a,b) => a.concat(b)).join('')
// }

// Solution 2: working but looks ugly

function lookSay(number) {
  let i = 0;
  number = [...String(number)];
  let arr = [[1, number.shift()]];

  while (number.length > 0) {
    if (number[0] === arr[i][1]) {
      arr[i][0]++;
      number.splice(0, 1);
      continue;
    }
    arr.push([1, ...number.splice(0, 1)]);
    i++;
  }

  return +arr.reduce((a, b) => a.concat(b)).join('');
}

//Test Cases
console.log(lookSay(0), 10);
console.log(lookSay(2014), 12101114);
console.log(lookSay(1122), 2122);
console.log(lookSay(223222), 221322);
