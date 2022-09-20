const sortTheInnerContent = (words) =>
  words
    .split(' ')
    .map(
      (x, y) =>
        `${x[0]}${[...x.slice(1, x.length - 1)].sort().reverse().join('')}${
          x.length > 1 ? x[x.length - 1] : ''
        }`
    )
    .join(' ');
