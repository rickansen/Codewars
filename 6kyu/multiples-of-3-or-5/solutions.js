function solution(number){
    let arr = []
    if (number > 0) {
  
      for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            arr.push(i)
        }
      }
      return arr.length > 0 ? arr.reduce((a,b) => a + b) : 0
  
    } else {
      return 0
    }
    
}