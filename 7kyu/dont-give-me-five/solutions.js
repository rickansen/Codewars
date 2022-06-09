function dontGiveMeFive(start, end){
    
    let arr = []

    for (let i = start; i<= end ; i++){
        if (!String(i).includes('5')) {
            arr.push(i)
        }
    } 
    return arr.length
}
    