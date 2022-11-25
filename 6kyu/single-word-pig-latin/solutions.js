// Solution 1

function pigLatin(string) {
  if (/[^a-z]/gi.test(string)) return null;
  if (/[aeiou]/i.test(string[0])) return `${string}way`.toLowerCase();
  if (!/[aeiou]/gi.test(string)) return `${string}ay`.toLowerCase();
  let index = [...string].findIndex((x) => /[aeiou]/i.test(x));
  return `${string.slice(index)}${string.slice(0, index)}ay`.toLowerCase();
}

// Test Cases

console.log(pigLatin('map'), 'apmay');
console.log(pigLatin('egg'), 'eggway');
console.log(pigLatin('MPSTE'), 'empstay');
console.log(pigLatin('PPpaedTIR'), 'aedtirpppay');
console.log(pigLatin('tes3t5'), null);
