function stray(numbers) {

    let length = numbers.length
 

    if (length % 2 === 1){
        let arr = numbers.map(x => x).sort((a,b) => a - b )

        if (arr[0] !== arr[1]){
            return arr[0]
        } else if(arr[length -1] !== [1]){
            return arr[length-1]
        }
    } else {
        return 'Not a valid array length'
    }    

}
