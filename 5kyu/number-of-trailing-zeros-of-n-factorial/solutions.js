function zeros (n) {
    let result = 0
    for (let i = 1; i <20; i++) {
      result += Math.floor(n / (5 ** i))
    }
    return result
  }
  
  console.log(zeros(250))