const stepThroughWith = s => [...s].map( (x,y) => x === s[y+1]).includes(true)


console.log(
    stepThroughWith("moon"), true, "You can take the moon, but not the sun");
console.log(
    stepThroughWith("test"), false, "You can take a challenge, but not a test");
console.log(
    stepThroughWith("glasses"), true, "You can take your glasses, but not your contacts");
console.log(
    stepThroughWith("airplane"), false, "You can take a balloon, but not an airplane");
console.log(
    stepThroughWith("free"), true, "You can be free, but not in chains");
console.log(
    stepThroughWith("branch"), false, "You can take the tree or the wood, but not a branch");
