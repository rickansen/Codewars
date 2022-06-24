function productFib(prod){
    let fib = [1, 1, 2, 3]
    let counter = 2
    
    while (fib[fib.length -1] * fib[fib.length -2] <= prod) {
      fib.push(fib.slice(counter, counter + 2).reduce((a,b) => a + b))
      counter ++
    }
  
    let find = fib.map((x,y,z) => x * z[y+1] === prod ? [x, z[y+1], true] : [x, z[y+1], false])
  
    return find.filter(x => x[2] === true).length !== 0 ? find.filter(x => x[2] === true)[0] : find[find.length-2]
  }