function permuteAPalindrome(input) {
  let instance = Array.from(new Set(input)).sort().map(x => [...input].filter(a => a === x).length)
  return instance.filter(x => x % 2 !== 0).length > 1 ? false : true
}

