function parse( data ){
    let regex = new RegExp(/[idso]/), arr = [], result = 0
    data = [...data].filter(x => regex.test(x))
  
    for (let i = 0; i < data.length; i++) {
        if (data[i] === 'i') {
            result++
        } else if (data[i] === 'd') {
            result--
        } else if (data[i] === 's') {
            result = result ** 2
        } else {
            arr.push(result)
        }
    }

    return arr
}
