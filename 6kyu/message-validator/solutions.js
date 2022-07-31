function isAValidMessage(message) {
  let regex = new RegExp(/[\d]/);
  if (!message) return true;
  if (!regex.test(message[0]) || regex.test(message[message.length - 1]))
    return false;

  let msg = message.split(regex).filter((x) => x);

  for (let i = 0; i < msg.length; i++) {
    message = message.replace(msg[i], ' ');
  }
  message = message.split(' ').filter((x) => x);

  return message.length === msg.length
    ? msg.map((x, y) => x.length == message[y]).every((x) => x === true)
    : false;
}

console.log(isAValidMessage('3hey5hello2hi'), true);
console.log(isAValidMessage('4code13hellocodewars'), true);
console.log(isAValidMessage('3hey5hello2hi5'), false);
console.log(isAValidMessage('code4hello5'), false);
console.log(isAValidMessage('1a2bb3ccc4dddd5eeeee'), true);
console.log(isAValidMessage(''), true);
