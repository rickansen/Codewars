function ascendDescend(length, minimum, maximum) {
    if (maximum < minimum || length === 0) return ''
    if (minimum === maximum) return String(minimum).repeat(length).slice(0, length)
  
    let arr = []
    for (let i = minimum; i < maximum; i++) {
      arr.push(i)
    }
    const num = String(arr[0]).length 
    let complete = ((maximum - minimum) * 2) 
    return (String(minimum) + `${arr.join('').slice(num)}${maximum}${arr.reverse().join('')}`.repeat(Math.ceil(length / complete))).slice(0, length)
  
}