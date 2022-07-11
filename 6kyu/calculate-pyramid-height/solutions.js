function pyramidHeight(n) {
    counter = 1
  
    while (n > 0) {
      n -= counter ** 2
      counter++
    }
    return n < 0 ? counter - 2 : counter -1
}