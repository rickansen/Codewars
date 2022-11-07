function VigenèreCipher(key, abc) {
  this.encode = function (str) {
    const keystream = key
      .repeat(Math.ceil(str.length / key.length))
      .slice(0, str.length);
    return [...str]
      .map((x, y) =>
        abc.indexOf(x) !== -1
          ? abc[(abc.indexOf(x) + abc.indexOf(keystream[y])) % abc.length]
          : x
      )
      .join('');
  };

  this.decode = function (str) {
    const keystream = key
      .repeat(Math.ceil(str.length / key.length))
      .slice(0, str.length);
    return [...str]
      .map((x, y) => {
        let code =
          abc.indexOf(x) !== -1
            ? abc.indexOf(x) - abc.indexOf(keystream[y])
            : x;
        code = code < 0 ? code + abc.length : code;
        return typeof code === 'number' ? abc[code] : code;
      })
      .join('');
  };
}
