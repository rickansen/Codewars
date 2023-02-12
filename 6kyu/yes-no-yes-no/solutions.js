function yesNo(arr){
    let res = []
    let temp = arr.slice(0)
    let counter = 0
  for (let i = 0; i < temp.length; i++) {
    let tempArr = []
    for (let j = 0; j < arr.length; j++) { 
        if (counter === 0) {
            res.push(arr[j])
            counter++
            continue
        } 

        tempArr.push(arr[j])
        counter--
    }
    arr = tempArr
  }

    return res  
}

console.log(
    yesNo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [ 1, 3, 5, 7, 9, 2, 6, 10, 8, 4 ]);
console.log(
    yesNo(['this', 'code', 'is', 'right', 'the']), [ 'this', 'is', 'the', 'right', 'code' ]);
