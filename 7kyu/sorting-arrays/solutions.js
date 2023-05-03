const sortArray = (a1, a2) => a1.map( (x,y) => a2.find(a => a[0] === x[0]) )


var a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'];
var a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'];
console.log(
    sortArray(a1, a2), ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']);
  
var a3 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin'];
var a4 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo'];
console.log(
    sortArray(a3, a4), ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']);
  
var a5 = ['newt', 'lizard', 'snail', 'tapir', 'rabbit'];
var a6 = ['tortoise', 'narwhal', 'llama', 'raven', 'sloth'];
console.log(
    sortArray(a5, a6), ['narwhal', 'llama', 'sloth', 'tortoise', 'raven']);

