function flatten(...args) {
  while (args.some((x) => Array.isArray(x))) {
    args = args.map((x) => Array.isArray(x) ? x : [x])
      .reduce((a, b) => a.concat(b));
  }
  return args
}