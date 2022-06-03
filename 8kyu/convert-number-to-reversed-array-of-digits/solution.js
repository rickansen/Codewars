function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }
  
  digitize(123)
  