function nextVersion(version) {
  if (version.length === 1) return +version + 1 + '';

  version = version.split('.').reverse();

  for (let i = 0; i < version.length; i++) {
    if (i !== version.length - 1) {
      if (version[i] == 9) {
        version[i] = 0;
      } else if (version[i] == 10) {
        version[i] = 0;
        version[i + 1] = +version[i + 1] + 1;
      } else {
        version[i] = +version[i] + 1;
        break;
      }
    } else {
      version[i] = +version[i] + 1;
    }
  }

  return version.reverse().join('.');
}

console.log(nextVersion('1.2.3'), '1.2.4');
console.log(nextVersion('0.9.9'), '1.0.0');
console.log(nextVersion('1'), '2');
console.log(nextVersion('1.2.3.4.5.6.7.8'), '1.2.3.4.5.6.7.9');
console.log(nextVersion('9.9'), '10.0');

console.log(nextVersion('1.2.3') === '1.2.4');
console.log(nextVersion('0.9.9') === '1.0.0');
console.log(nextVersion('1') === '2');
console.log(nextVersion('1.2.3.4.5.6.7.8') === '1.2.3.4.5.6.7.9');
console.log(nextVersion('9.9') === '10.0');
