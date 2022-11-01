function makeSentence(parts) {
  parts = parts.filter((x) => x !== '.');
  const re = /[^,]/i;

  return (
    parts.reduce((a, b) => {
      if (re.test(b)) return `${a} ${b}`;
      return `${a}${b}`;
    }) + '.'
  );
}
