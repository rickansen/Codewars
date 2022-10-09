function range(...args) {
  if (args.length === 1) {
    if (args[0] < 0) return [];
    return Array(args[0])
      .fill(0)
      .map((x, y) => x + y);
  } else if (args.length === 2) {
    return Array(args[1] - args[0])
      .fill(args[0])
      .map((x, y) => x + y);
  } else {
    let arr = [];
    for (let i = 0; i < args[1]; i++) {
      arr.push(args[0] + args[2] * i);
    }

    if (args[2] === 0 && args[0] > 0) {
      return arr.slice(0, args[1] - args[0]);
    } else if (args[2] === 0 && args[0] === 0) {
      return arr;
    } else {
      return arr.slice(0, arr.indexOf(arr.find((x) => x >= args[1])));
    }
  }
}
