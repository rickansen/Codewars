var flatten = function (array){
    let arr = []
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])){
        arr.push(...array[i])
      } else {
        arr.push(array[i])
      }
    }
    return arr
  }