function firstOperationCharacter(expr) {
  expr = [...expr];
  let pairOfBraces = [];

  if (!expr.includes('('))
    return expr.includes('*') ? expr.indexOf('*') : expr.indexOf('+');
  let exp = expr.slice();
  let start = 0;
  let end = 0;
  let arr = [];

  for (let i = 0; i <= expr.length; i++) {
    end = i;
    let slice = exp.slice(start, end);

    if (
      slice.filter((x) => x === '(').length ===
        exp.slice(0, i).filter((x) => x === ')').length &&
      slice.includes('(')
    ) {
      pairOfBraces.push(slice);
      exp = exp.slice(end);
      start = end;
    }
  }

  return pairOfBraces;
}

// console.log(firstOperationCharacter("(2 + 2) * 2"),3)
// console.log(firstOperationCharacter("2 + 2 * 2"),6)
console.log(firstOperationCharacter('((2 + 2) * 2) * 3 + (2 + (2 * 2))'), 28);
