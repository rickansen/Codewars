const lengthOfRailway = (sounds) =>
  [...sounds]
    .filter((x) => /[呜哐当]/.test(x))
    .join('')
    .split('呜呜呜')
    .filter((x) => x)
    .map((x, y) => (y % 2 === 0 ? (x.length / 2) * 20 : (x.length / 2) * 10))
    .reduce((a, c) => a + c);

console.log(
  lengthOfRailway('呜呜呜哐当哐当哐当哐当哐当呜呜呜哐当哐当哐当哐当哐当'),
  150
);
console.log(
  lengthOfRailway(
    '呜呜呜哐当哐当哐当哐当哐当呜呜呜哐当哐当哐当哐当哐当呜呜呜哐当哐当哐当哐当哐当呜呜呜哐当哐当哐当哐当哐当'
  ),
  300
);
console.log(
  lengthOfRailway(
    '呜呜呜哐当哐当面包饮料矿泉水了啊，哐当桶面火腿肠茶叶蛋了啊哐当哐当呜呜呜哐当哐当哐当北京站到了，下车的旅客请带好您的行李，准备下车哐当哐当'
  ),
  150
);
