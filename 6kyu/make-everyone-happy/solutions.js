const smile = (text) =>
  text
    .split(' ')
    .map((x) =>
      /([\:\;\=][\-\~][\(\[])|([\:\;\=][\(\[])/.test(x)
        ? x.replace(/[\(\[]/g, (a) => (a === '(' ? ')' : ']'))
        : /([\)\]][\-\~][\:\;\=])|([\)\]][\:\;\=])/.test(x)
        ? x.replace(/[\)\]]/g, (a) => (a === ')' ? '(' : '['))
        : x
    )
    .join(' ');

console.log(smile('Howdy :('), 'Howdy :)');
console.log(smile('Never be sad =['), 'Never be sad =]');
console.log(
  smile("It's been raining all day ;-("),
  "It's been raining all day ;-)"
);
console.log(smile('My friend got married ;~['), 'My friend got married ;~]');
console.log(
  smile('Change this `=(` and this `:[`'),
  'Change this `=)` and this `:]`'
);
console.log(
  smile('Funny smileys: ;~[ :( :-( :~[ :-['),
  'Funny smileys: ;~] :) :-) :~] :-]'
);
console.log(
  smile('The list of positive numbers is [1,2,3,4...]'),
  'The list of positive numbers is [1,2,3,4...]'
);
console.log(smile('(((-)(((-)))(-)))'), '(((-)(((-)))(-)))');
console.log(smile(':)'), ':)');
console.log(smile('C :~( YwA =-) ( ;) lEUjGWv'), 'C :~) YwA =-) ( ;) lEUjGWv');
console.log(smile('): ]='), '(: [=');
