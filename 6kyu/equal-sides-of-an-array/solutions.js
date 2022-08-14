function findEvenIndex(arr) {

    let arr1 = [], arr2 = []
  for (let i = 0; i < arr.length; i++) {
    arr1.push(arr.slice(0, i).length > 0 ? arr.slice(0, i).reduce((a,b) => a + b) : 0)
    arr2.push(arr.slice(i+1, arr.length).length > 0 ? arr.slice(i+1, arr.length).reduce((a,b) => a + b) : 0)
  };

  let filt = arr1.map((x,y) => x === arr2[y] ? y : '').filter(x => x !== '')
  return filt.length > 0 ? filt[0] : -1

}
