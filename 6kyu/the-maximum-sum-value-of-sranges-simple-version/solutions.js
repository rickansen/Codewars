const maxSum = (arr, range) =>
  Math.max(
    ...range.map((x) =>
      Array(x[1] - x[0] + 1)
        .fill(x[0])
        .map((a, b) => arr[a + b])
        .reduce((a, b) => a + b)
    )
  );
