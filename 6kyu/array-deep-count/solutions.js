function deepCount(a){
 
    let nest = 0
    if (a.every(x => !Array.isArray(x))) return a.length

   while (a.findIndex(x => Array.isArray(x)) !== -1) {
    let index = a.findIndex(x => Array.isArray(x))
    let temp = a[index]
    a.splice(index,1)
    a.push(...temp)
    nest +=1
   }

    return a.length + nest
}

console.log(deepCount([]), 0, "Expected 0");
console.log(deepCount([1, 2, 3]), 3, "Expected 3");
console.log(deepCount(["x", "y", ["z"]]), 4, "Expected 4");
console.log(deepCount([1, 2, [3, 4, [5]]]), 7, "Expected 7");
console.log(deepCount([[[[[[[[[]]]]]]]]]), 8, "Expected 8");