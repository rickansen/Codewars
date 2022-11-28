const search = (searchTerm) =>
  TITLES.filter((x) => new RegExp(searchTerm, 'i').test(x));
