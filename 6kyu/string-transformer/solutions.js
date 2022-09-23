const stringTransformer = (str) =>
  str
    .split(' ')
    .map((x) =>
      [...x]
        .map((a) => (/[a-z]/.test(a) ? a.toUpperCase() : a.toLowerCase()))
        .join('')
    )
    .reverse()
    .join(' ');
