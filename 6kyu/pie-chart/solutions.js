function pieChart(obj){
    obj = JSON.parse(obj)

    let sum = Object.values(obj).reduce((a,b) => a + b)
    for (let val in obj) {
        obj[val] = (obj[val] / sum) * 360
    }
    
    return JSON.stringify(obj)
}