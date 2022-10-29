var fizzBuzzCustom = function (
  stringOne = 'Fizz',
  stringTwo = 'Buzz',
  numOne = 3,
  numTwo = 5
) {
  let result = [];
  for (i = 1; i <= 100; i++) {
    if (i % numOne === 0 && i % numTwo === 0) {
      result[i] = `${stringOne}${stringTwo}`;
    } else if (i % numOne === 0) {
      result[i] = stringOne;
    } else if (i % numTwo === 0) {
      result[i] = stringTwo;
    } else {
      result[i] = i;
    }
  }
  return result.slice(1);
};
