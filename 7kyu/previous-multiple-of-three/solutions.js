const prevMultOfThree = n => {
    n = String(n)
    while (+n % 3 !== 0) {
      n = n.slice(0, n.length-1)
    }
    return +n || null
}