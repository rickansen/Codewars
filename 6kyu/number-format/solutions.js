var numberFormat = function (number) {
  let str = String(number);
  const arr = [];

  for (let i = 0; i < Math.ceil(str.length / 3); i++) {
    arr.push(
      [...str]
        .reverse()
        .slice(i * 3, i * 3 + 3)
        .reverse()
    );
  }

  let formatted = arr
    .reverse()
    .map((x) => x.join(''))
    .join(',');
  return formatted.includes('-,') ? formatted.replace('-,', '-') : formatted;
};
