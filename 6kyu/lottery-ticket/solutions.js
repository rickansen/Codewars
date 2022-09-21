const bingo = (ticket, win) =>
  ticket
    .map((x) => [...x[0]].map((a) => a.charCodeAt()).includes(x[1]))
    .filter((a) => a).length >= win
    ? 'Winner!'
    : 'Loser!';
