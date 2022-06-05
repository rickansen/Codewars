const solution = mtrx => {
    let up = '^', down = 'v', left = '<', right = '>', target = 'x'
  
    let vertical = mtrx.map(x => x.map(a => a.includes(up) || a.includes(down) ).includes(true) )
    let horizontal = mtrx.map(x => x.map(a => a.includes(left) || a.includes(right)).includes(true))
  
    if (vertical.includes(true)) {
      let arr = mtrx.map((x,y,z) => x.map((a,b,c) => z[b][y])).filter(x => x.map(a => a.includes(up) || a.includes(down) ).includes(true))
      let scope = arr[0].includes(up) ? up : down
  
      if (arr[0].includes(scope) && arr[0].includes(target)) {
        if (scope === down) {
          return arr[0].indexOf(target) > arr[0].indexOf(scope)
        } else {
          return arr[0].indexOf(target) < arr[0].indexOf(scope)
        }
      } else {
        return false
      }
  
    } else if (horizontal.includes(true)) {
      let arr = mtrx[horizontal.indexOf(true)]
      let scope = arr.includes(right) ? right : left
  
      if (arr.includes(scope) && arr.includes(target)){
        if (scope === right) {
          return arr.indexOf(target) > arr.indexOf(scope)
        } else {
          return arr.indexOf(target) < arr.indexOf(scope)
        }
      } else {
        return false
      }
  
    } else {
      return false
    }
  
  }