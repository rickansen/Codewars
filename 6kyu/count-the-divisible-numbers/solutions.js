function divisibleCount(x, y, k) {
    let n1 =  x/k % 1 === 0 ? (x/k) * k : Math.ceil(x/k) * k
    let n2 =  y/k % 1 === 0 ? (y/k) * k : Math.ceil(y/k) * k
  
    if (k !== y) {
      if (k !== 1) {
        if (n1 === n2) {
          return 1
        } else if (x % k === 0 && y % k === 0){
          return Math.floor((n2 - n1) / k + 1)
        }  else {
          return Math.floor((n2 - n1) / k)
        }
      } else {
        return Math.floor(n2 - n1 + 1)
      }
    } else {
      return 1
    }
  
  }
  
  console.log(divisibleCount(1,10,9))
  
  // Test.assertEquals(divisibleCount(6,11,2),3);