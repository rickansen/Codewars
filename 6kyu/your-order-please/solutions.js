function order(words){
    let arr = []
    let split = words.split(' ')
    let arr2 = Array(split.length).fill(0).map((x,y) => y + 1)
    let arr3 = split.map(x => x.split('').find(a => a > 0)).map(x => +x)
  
    arr2 = arr2.map(x => arr3.indexOf(x))
  
    for (let i = 0;  i< split.length; i++) {
      arr.push(split[arr2[i]])
    }
    return arr.join(' ')
  
}