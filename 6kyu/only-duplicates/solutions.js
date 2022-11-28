const onlyDuplicates = (str) =>
  [...str].filter((x) => str.indexOf(x) !== str.lastIndexOf(x)).join('');
