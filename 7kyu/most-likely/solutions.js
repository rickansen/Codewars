const mostLikely = (prob1,prob2) => eval(prob1.replace(':', '/')) > eval(prob2.replace(':', '/'))

console.log(mostLikely('1:3','1:2'),false);
