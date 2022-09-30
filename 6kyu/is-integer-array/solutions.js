const isIntArray = (arr) =>
  !arr || arr.some((x) => typeof x !== 'number' || x % 1 !== 0) ? false : true;
