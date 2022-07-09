function rank(st, we, n) {
    if (!st) return 'No participants'
    else if (n > st.split(',').length) return 'Not enough participants'
    const split = st.split(',')
  
    let som = split.map((x,y) => [(x.toLowerCase().split('').map(a => a.charCodeAt() - 96).reduce((a,b) => a + b) + x.length) * we[y], y, x]).sort((a,b) => b[0] - a[0])
    const value = som.map(x => x [0]), index = som.map(x => x [1]), name =  som.map(x => x[2])
    let counter = 0
  
    if (value.map((x,y,z) => x === z[y+1] || x === z[y-1]).every(x => x === true) !== true) {
      const sort = value.map((x,y,z) => x === z[y+1] || x === z[y-1] ? name[y] : '').sort().filter(x => x)
      return value.map((x,y,z) => x === z[y+1] || x === z[y-1] ? sort[counter++] : name[y])[n-1]
    } else {
      return  [...new Set(value)].map(x => value.filter((a,b) => x === value[b]).length === 1 ? x : value.filter((a,b) => x === value[b])).map((x,y) => typeof x === 'number' ? x : x.map((a,b) => name[y* 2 + b]).sort() ).join().split(',')[n-1]
    }
}