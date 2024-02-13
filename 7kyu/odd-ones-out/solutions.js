const oddOnesOut = (nums) =>
  nums.filter((x, y, z) => z.filter((a) => a === x).length % 2 === 0);
