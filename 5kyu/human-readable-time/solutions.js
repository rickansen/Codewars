function humanReadable (seconds) {
    let arr = [3600, 60, 1]  
    let arr2 = [[ Math.floor(seconds / arr[0]) , seconds % arr[0]]]
    
    for (let i = 0; i < 2; i++) {
        arr2.push( [ Math.floor(arr2[i][1] / arr[i + 1]), seconds % arr[i + 1] ] )
    }
  
    return arr2.map(x => String(x[0])).map(x => x.length === 1 ? `0${x}` : x).join(':')
  }