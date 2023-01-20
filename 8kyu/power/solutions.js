function numberToPower(number, power){
    let num = number
    if (power === 0) return 1
    if (power === 1) return number
    
    for (let i = 2; i <= power; i++) {
      number = num * number
    }
    return number
}