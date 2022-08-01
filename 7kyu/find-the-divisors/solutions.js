function divisors(integer) {
  let arr = [];
  for (let i = 1; i < integer; i++) {
    if (integer % i === 0) arr.push(i);
  }

  return arr.length === 1 ? `${integer} is prime` : arr.slice(1);
}
