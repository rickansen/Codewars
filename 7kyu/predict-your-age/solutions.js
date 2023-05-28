const predictAge = (age1,age2,age3,age4,age5,age6,age7,age8) => Math.floor(Math.sqrt([age1, age2, age3, age4, age5, age6, age7, age8].map(x => x ** 2).reduce((a,b) => a+b)) / 2)

console.log(predictAge(65,60,75,55,60,63,64,45), 86);    

