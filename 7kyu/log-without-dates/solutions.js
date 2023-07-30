const checkLogs = (log) =>
  log.length === 0
    ? 0
    : log.length === 1
    ? 1
    : log.map((x) => +x.split(':').join('')).filter((x, y, z) => x >= z[y + 1])
        .length + 1;

console.log(checkLogs(['12:12:12']), 1);
console.log(
  checkLogs(['00:00:00', '00:01:11', '02:15:59', '23:59:58', '23:59:59']),
  1
);
console.log(checkLogs(['12:00:00', '23:59:59', '00:00:00']), 2);
console.log(checkLogs(['12:00:00', '12:00:00', '00:00:00']), 3);
