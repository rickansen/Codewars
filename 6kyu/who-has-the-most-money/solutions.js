function mostMoney(students) {
    let sum = students.map(x => [x.name, [x.fives * 5, x.tens * 10, x.twenties * 20].reduce((a,b) => a + b) ]).sort((a,b) => a[1] - b[1])
    return sum.length == 1 ? sum[0][0] : sum[sum.length - 1][1] !== sum[0][1] ? sum[sum.length - 1][0] : 'all'
}

class Student {
    constructor(name, fives, tens, twenties) {
        this.name = name;
        this.fives = fives;
        this.tens = tens;
        this.twenties = twenties;
    }
}

const andy = new Student("Andy", 0, 0, 2);
const stephen = new Student("Stephen", 0, 4, 0);
const eric = new Student("Eric", 8, 1, 0);
const david = new Student("David", 2, 0, 1);
const phil = new Student("Phil", 0, 2, 1);
const cam = new Student("Cameron", 2, 2, 0);
const geoff = new Student("Geoff", 0, 3, 0);
    
console.log(mostMoney([andy, stephen, eric, david, phil]), "Eric")
console.log(mostMoney([cam, geoff, andy, stephen, eric, david, phil]), "Eric")
console.log(mostMoney([andy]), "Andy")
console.log(mostMoney([stephen]), "Stephen")
console.log(mostMoney([david, cam, geoff]), "all")
