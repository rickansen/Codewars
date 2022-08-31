function calculate1RM(w, r){
    let max = Math.round(Math.max(...[ w * ( 1 + (r / 30) ), (100 * w) / ( 101.3 - (2.67123 * r) ) , w * (r ** 0.1) ])) 
    return r === 1 ? w : r === 0 ? 0 :  max
}