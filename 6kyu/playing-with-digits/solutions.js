function digPow(n, p){
    let result = 0
    let counter = 2
    let arr = [n]
    const str = String(n)
  
    for (let i = 0; i < String(n).length; i++) {
      result += Number(str[i]) ** p++
    }
  
    while (arr[arr.length-1] <= result) {
      arr.push(n * counter)
      counter++
    }
    
    return arr.indexOf(result) !== -1 ? arr.indexOf(result) + 1 : -1
}  