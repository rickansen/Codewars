// Solution 1: Failed time complexity

function scramble(str1, str2) {
  let obj = {},
    obj2 = {},
    arr = [];
  for (let i = 0; i < str1.length; i++) {
    obj[str1[i]] = [...str1].filter((x) => str1[i] === x).length;
  }

  for (let i = 0; i < str2.length; i++) {
    obj2[str2[i]] = [...str2].filter((x) => str2[i] === x).length;
  }

  for (items in obj2) {
    arr.push(obj[items] >= obj2[items]);
  }

  return arr.every((x) => x);
}

console.log(scramble('rkqodlw', 'world'), true);
console.log(scramble('cedewaraaossoqqyt', 'codewars'), true);
console.log(scramble('katas', 'steak'), false);
console.log(scramble('scriptjavx', 'javascript'), false);
console.log(scramble('scriptingjava', 'javascript'), true);
console.log(scramble('scriptsjava', 'javascripts'), true);
console.log(scramble('javscripts', 'javascript'), false);
console.log(scramble('jscripts', 'javascript'), false);
console.log(scramble('aabbcamaomsccdd', 'commas'), true);
console.log(scramble('commas', 'commas'), true);
console.log(scramble('sammoc', 'commas'), true);
