function luckCheck(ticket) {
  let regex = new RegExp(/[0-9]/);
  if (
    !ticket ||
    typeof ticket !== 'string' ||
    ticket.length < 2 ||
    !ticket.split('').every((x) => regex.test(x))
  )
    throw Error;
  const split = ticket.split('');
  const middle =
    ticket.length % 2 === 0 ? ticket.length / 2 : Math.floor(ticket.length / 2);
  const firstSlice = split.slice(0, middle),
    secondSlice =
      ticket.length % 2 === 0 ? split.slice(middle) : split.slice(middle + 1);
  return [firstSlice, secondSlice]
    .map((x) => x.reduce((a, b) => +a + +b))
    .every((a, b, c) => a === c[0]);
}
