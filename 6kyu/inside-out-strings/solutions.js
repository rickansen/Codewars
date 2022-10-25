const insideOut = (x) =>
  x
    .split(' ')
    .map((x) =>
      x.length % 2 === 0
        ? `${[...x.slice(0, x.length / 2)].reverse().join('')}${[
            ...x.slice(x.length / 2),
          ]
            .reverse()
            .join('')}`
        : `${[...x.slice(0, x.length / 2)].reverse().join('')}${
            x[Math.floor(x.length / 2)]
          }${[...x.slice(x.length / 2 + 1)].reverse().join('')}`
    )
    .join(' ');
