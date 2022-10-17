const palindrome = (string) =>
  [...string.toLowerCase()]
    .filter((x) => /[a-z]/.test(x))
    .reverse()
    .join('') ===
  [...string.toLowerCase()].filter((x) => /[a-z]/.test(x)).join('');
