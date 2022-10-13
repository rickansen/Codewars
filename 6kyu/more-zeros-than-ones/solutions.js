function moreZeros(s) {
  return Array.from(new Set(s))
    .map((x) => {
      const binary = x.charCodeAt().toString(2);
      return [...binary].filter((a) => a === '0').length > binary.length / 2
        ? x
        : '';
    })
    .filter((x) => x);
}
