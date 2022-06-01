function longestSlideDown (pyramid) {
  let arr = []
  let copy = pyramid.slice(0).reverse()
  let arr2 = []

  for (let i = 0; i < copy[0].length + 1; i++) {
    arr.push(0)
  }

  copy.unshift(arr)

  for (let i = 0; i <copy.length; i++) {
    arr2.push(
      copy[i].map((x,y) => i !== 0 ? copy[i][y] = Math.max(...[(x + copy[i - 1][y]), x + copy[i - 1][y + 1]]) : 0)
      )
    
  }
  return  arr2[arr2.length -1][0]
}