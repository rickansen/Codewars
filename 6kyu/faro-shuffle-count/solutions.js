function faroCount (n){
    if (n === 2) return 0
    let arr = Array(n).fill(1).map((x,y) => y + 1)
    let counter = 0, counter2 = 0
    let arr2 = arr.map((x,y) => y % 2 === 0 ? counter++ : (arr.length / 2 + counter) -1)
    let arr3 = arr.map((x,y,z) => z[arr2[y]])
  
    while (arr3.every((x,y) => x === arr[y]) === false) {
      arr3 = arr3.map((x,y,z) => z[arr2[y]])
      counter2++
    }
  
    return counter2 + 1
}