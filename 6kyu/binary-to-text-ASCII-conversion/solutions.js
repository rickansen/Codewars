const binaryToString = (binary) =>
  Array(binary.length / 8)
    .fill(1)
    .map((x, y) =>
      String.fromCharCode(parseInt(binary.slice(y * 8, y * 8 + 8), 2))
    )
    .join('');
