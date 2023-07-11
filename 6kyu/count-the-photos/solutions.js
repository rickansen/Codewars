// Solution 1: Too slow
function countPhotos(road) {
  let left;
  let right;
  (tot = 0), (arr = []);

  if (!road.includes('.')) return 0;

  for (let i = 0; i < road.length; i++) {
    if (road[i] === '.') {
      (left = road.slice(0, i)), (right = road.slice(i + 1, road.length));
      arr.push(
        [
          [...left].filter((x) => x === '>').length,
          [...right].filter((x) => x === '<').length,
        ].reduce((a, c) => a + c)
      );
    }
  }

  return arr.reduce((a, c) => a + c);
}

console.log(countPhotos('>.>..<'), 8);
console.log(countPhotos('.><.>>.<<'), 11);
console.log(countPhotos('.>>>'), 0);
console.log(countPhotos('>..<<.>.<.'), 15);
console.log(countPhotos('.<>>..><.<<<<<.'), 34);
console.log(countPhotos('<..>>..>>.><.<.><..<'), 57);
console.log(countPhotos('<<.'), 0);
console.log(countPhotos('>>>.<<<'), 6);
console.log(countPhotos('..'), 0);
console.log(countPhotos('>>><<<'), 0);
console.log(
  countPhotos('..<>.>>.><>>.<<<.<>>.>.>>>>>..><<.>.>>..>.>>><><>.'),
  248
);
