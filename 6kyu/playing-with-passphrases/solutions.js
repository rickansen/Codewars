function playPass(s, n) {
  let regex = [new RegExp(/[a-z]/i), new RegExp(/\d/)];
  return [...s]
    .map((x) => {
      const shift = x.charCodeAt() - 64 + n;
      const circular = shift > 26 ? shift % 26 : shift;
      const shifted = regex[0].test(x)
        ? String.fromCharCode(circular + 64)
        : regex[1].test(x)
        ? 9 - x
        : x;
      return shifted;
    })
    .map((x, y) => (y % 2 !== 0 && regex[0].test(x) ? x.toLowerCase() : x))
    .reverse()
    .join('');
}
