function assembleString(array){
    let arr = []
    let arr1 = []

    if (array.length !== 0) {
        for (let i = 0; i<array[0].length; i++) {
            for (let x = 0; x<array.length; x++) {
                arr.push(array[x][i])
            }
        }

        for (let i = 0; i<arr.length / array.length; i++) {
            arr1.push(arr.slice(i *array.length, i * array.length + array.length))
        }

        return arr1.map((x,y,z) => x.every(a => a === '*') ? "#" : x.filter(a=> a!== '*')[0]).join('')
    } else {
        return ''
    }

}