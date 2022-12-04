// Solution 1 : Ehh
function encrypter(string) {
  return [...string]
    .map((x) => {
      let charCode = x.charCodeAt() - 96 + 13;
      return /[a-z]/.test(x) ? (charCode > 26 ? charCode % 26 : charCode) : ' ';
    })
    .map((x) =>
      x !== ' ' ? String.fromCharCode(Math.abs(x - 26) + 1 + 96) : ' '
    )
    .join('');
}

// Test Cases
console.log(encrypter('amz'), 'man');
console.log(
  encrypter('welcome to the organization'),
  'qibkyai ty tfi yvgmzenmteyz'
);
console.log(encrypter('hello'), 'fibby', "Expect 'hello' to return 'fibby'");
console.log(encrypter('my name is'), 'ao zmai eu');
console.log(encrypter('goodbye'), 'gyyjloi');
