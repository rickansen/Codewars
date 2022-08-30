function tripledouble(num1, num2) {
  let triple = new RegExp(/([0-9])\1{2}/), double = new RegExp(/([0-9])\1/)
 
  for (let i = 0; i < 10; i++ ) {
    if (triple.test(String(num1)) && double.test(String(num2))) {
      return 1
    } else {
      return 0
    }
  }

}
