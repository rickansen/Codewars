function pascal(depth) {
    var result = []
    for (var i = 1; i <= depth; ++i) {
      var row = []
      for (var j = 0; j < i; ++j) {
        row.push(j == 0 || j == i - 1 ? 1 : result[i-2][j-1] + result[i-2][j])
      }
      result.push(row.map(x => BigInt(x)))
    }
    return result[depth - 1]
}
  
function formula(n) {
    function pascal(depth) {
        var result = []
        for (var i = 1; i <= depth; ++i) {
          var row = []
          for (var j = 0; j < i; ++j) {
            row.push(j == 0 || j == i - 1 ? 1 : result[i-2][j-1] + result[i-2][j])
          }
          result.push(row.map(x => BigInt(x)))
        }
        return result[depth - 1]
    }

    let pascalArr = pascal(Math.abs(n)+1)

    if (n === 0) return "1"
    if (n === 1) return "a+b"
    if (n === -1) return "1/(a+b)"


    pascalArr = pascalArr.map((x,y) => {
        if (Math.abs(n) - y === 1) return `${x}ab${y === 1 ? '' : `^${y}`}`
        if (Math.abs(n) - y === 0) return `b^${y}`
        if (x == 1) return `a^${Math.abs(n)-y}`
        if (x != 1) return `${x}a^${Math.abs(n)-y}b${y === 1 ? '' : `^${y}`}`  
    }).join('+')

    return n > 0 ? pascalArr : `1/(${pascalArr})`

}
