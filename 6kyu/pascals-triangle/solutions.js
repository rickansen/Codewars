function pascalsTriangle (n) {
    let arr = []
    
    for (let i = 0; i < n; i++) {
      arr.push(i == 0 ? [1] : i == 1 ? [1,1] : (arr[arr.length -1] + ',1').split(',').map((x,y,z) => y === 0 || y === arr.length ? 1 : arr[arr.length - 1].slice(i-i, i-i+2).reduce((a,b) => a + b, 0)))
    }
    
    arr = arr.map((x,y,z) => y === 0 || y === 1 ? x : x.map((a,b,c) =>b === 0 || b === c.length-1 ? 1 : arr[y][b] = arr[y-1].slice(b - 1, b + 1).reduce((a,b) => a+b, 0)))
  
    return arr.map(x => x.length !== 1 ? x.join(' ') : String(x)).join(' ').split(' ').map(x => Number(x))
  
    
}