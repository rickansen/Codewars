function autocomplete(input, dictionary) {
  input = [...input].filter((x) => /[a-z]/i.test(x)).join('');
  return dictionary
    .filter(
      (x) => x.slice(0, input.length).toLowerCase() === input.toLowerCase()
    )
    .slice(0, 5);
}
