function palindrome(num, s) {
  const numCopy = [...String(num)];
  if (
    numCopy.includes('-') ||
    !!numCopy.find((x) => /\D/i.test(x)) ||
    typeof s !== 'number'
  )
    return 'Not valid';
  let arr = [];
  while (arr.length !== s) {
    let copy = [...String(num < 10 ? (num = 10) : num)];
    if (copy.slice(0).reverse().join('') == copy.join('')) arr.push(num);
    num++;
  }
  return arr;
}
