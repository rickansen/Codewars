const dup = (s) =>
  s.map((x) =>
    [...x]
      .map((a, b) => (a === x[b + 1] ? 0 : a))
      .filter((a) => a)
      .join('')
  );
