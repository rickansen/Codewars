let words = ['war', 'yap', 'was', 'zap'];

var check1800 = function (str) {
  const split = str.split('-');
  const phoneButtons = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z'],
  ];
  let buttons = str
    .split('-')
    .slice(2)
    .map((x, y) =>
      [...x]
        .map((a, b) =>
          phoneButtons.findIndex((z) => z.includes(a.toLowerCase()))
        )
        .join('')
    );
  return buttons;
};

console.log(check1800('1-800-CODE-WAR'), [
  '1-800-CODE-WAR',
  '1-800-CODE-YAP',
  '1-800-CODE-WAS',
  '1-800-CODE-ZAP',
]);
