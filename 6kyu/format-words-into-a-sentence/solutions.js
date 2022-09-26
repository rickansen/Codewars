function formatWords(words) {
  if (!words || words.length === 0 || words.every((x) => x === '')) return '';
  words = words.filter((x) => x);
  let one = words
    .slice(0, words.length === 1 ? 1 : words.length - 1)
    .join(', ');
  return words.length === 1 ? one : `${one} and ${words[words.length - 1]}`;
}
