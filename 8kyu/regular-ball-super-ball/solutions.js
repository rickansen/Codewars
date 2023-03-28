var Ball = function(ballType) {
    this.ballType = ballType || 'regular'
};

let ball = new Ball()
let ball2 = new Ball('super')

console.log(new Ball().ballType, "regular");
console.log(new Ball("super").ballType, "super");