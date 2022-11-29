// Solution 1: Dope as Fuck

Object.prototype.hash = function (string) {
  return (
    string.split('.').reduce((a, b) => (!a[b] ? 0 : a[b]), this) || undefined
  );
};

// Test Cases

var obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.',
      },
    },
  },
};

console.log(obj.hash('person.name'), 'joe');
console.log(obj.hash('person.game.home'), undefined);
console.log(obj.hash('person.name'), 'joe'); //
console.log(obj.hash('person.history.bio'), { funFact: 'I like fishing.' }); //
console.log(obj.hash('person.history.homeStreet'), undefined); //
console.log(obj.hash('person.animal.pet.needNoseAntEater'), undefined); //
