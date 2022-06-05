function figureOut(arr) {
    let letters = arr[0].split('')
    let hop = arr.map(x => x.split(''))
    .map((x) => x.map((a,b) => x.indexOf(letters[b]) ))
    let iOfSpace = []
    let arr1 = []
    let arr2 = []
  
    for (let i =0; i<arr[0].length; i++) {
      for (let x =0; x<arr.length; x++) {
        arr1.push(hop[x][i])
      }
    }
  
    for (let i =0; i<arr[0].length; i++) {
      arr2.push(arr1.slice(i*arr.length, i * arr.length + arr.length))
    }
  
    for (let i = 0; i< arr[0].length; i++) {
      iOfSpace.push(arr[0].split('')[i] === ' ' ? i : '')
    }
  
    let index = arr2.map((x,y,z) => y === iOfSpace[y] ? [] : x.map((a,b,c) => c[b+1] - 1 == c[b] || c[b+1] + 1 == c[b] || c[b+1] == c[b])).map(x=> x.filter(a => a === false)).map(x=> x.length).map(x => x < 2 ? 0 : 1).indexOf(1)
  
    return index !== -1 ? letters[index] : null
   
  }