function cyclops(n) {
    let binary = [...n.toString(2)]

    if (binary.length % 2 === 0) return false

    return binary.slice(0, ((binary.length - 1) / 2) ).every(x => x == 1) && binary[(binary.length - 1) / 2] == 0 && binary.slice(Math.ceil(binary.length / 2)).every(x => x == 1)
   
}

console.log(cyclops(1), false);
console.log(cyclops(5), true);
console.log(cyclops(3), false);
console.log(cyclops(13), false);
console.log(cyclops(23), false);
console.log(cyclops(27), true);
console.log(cyclops(2015), true);
console.log(cyclops(666), false);
console.log(cyclops(42), false);