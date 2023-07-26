function addCheckDigit(number) {
  let remainder =
    [...number]
      .reverse()
      .map(
        (x, y) =>
          [
            ...'234567'
              .repeat(Math.ceil(number.length / 6))
              .slice(0, number.length),
          ][y] * +x
      )
      .reduce((a, c) => a + c) % 11;
  return `${number}${
    remainder === 0 ? 0 : remainder === 1 ? 'X' : 11 - remainder
  }`;
}

console.log(addCheckDigit('036532'), '0365327');
console.log(addCheckDigit('12388878'), '123888782');
console.log(addCheckDigit('111111111'), '1111111118');
