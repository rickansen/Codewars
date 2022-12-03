// Solution 1 : ehhh

function numericFormatter(template, key) {
  if (!key) key = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let temp = 0;
  return [...template]
    .map((x, y) => {
      if (/[a-z]/i.test(x)) return [...key][(y - temp) % [...key].length];
      temp += 1;
      if (x === ' ') return ' ';
      return x;
    })
    .join('');
}

// Test Cases
console.log(numericFormatter('xxx xxxxx xx', '5465253289'), '546 52532 89');
console.log(numericFormatter('xxx xxxxx xx'), '123 45678 90');
console.log(numericFormatter('+555 aaaa bbbb', '18031978'), '+555 1803 1978');
console.log(numericFormatter('+555 aaaa bbbb'), '+555 1234 5678');
console.log(numericFormatter('xxxx yyyy zzzz'), '1234 5678 9012');
