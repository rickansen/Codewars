function SubstitutionCipher(abc1, abc2) {
  this.encode = function (str) {
    return [...str].map((x, y) => abc2[abc1.indexOf(x)] || x).join('');
  };
  this.decode = function (str) {
    return [...str].map((x, y) => abc1[abc2.indexOf(x)] || x).join('');
  };
}
