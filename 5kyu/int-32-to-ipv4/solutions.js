function int32ToIp(int32) {
  let binary = int32.toString(2).split('');
  let copy = binary.slice(0, binary.length - 1);
  let arr = [];
  let arr2 = [];

  if (binary.length === 32) {
    for (let i = 0; i < binary.length; i++) {
      arr.push(binary.splice(0, 8));
    }

    return arr.map((x) => parseInt(x.join(''), 2)).join('.');
  } else {
    binary = binary.map((x) => Number(x));
    for (let i = 1; i < 32 - copy.length; i++) {
      binary.unshift(0);
    }

    for (let i = 0; i < binary.length; i++) {
      arr.push(binary.splice(0, 8));
    }

    return arr.map((x) => parseInt(x.join(''), 2)).join('.');
  }
}
