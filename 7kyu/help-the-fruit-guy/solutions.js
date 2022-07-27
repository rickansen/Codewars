function removeRotten(bagOfFruits){
    if (!bagOfFruits) return []
    let regex = /[A-Z]/
    return bagOfFruits.map(x => regex.test(x) ? x.slice(x.indexOf(x.split('').find(a => regex.test(a)))).toLowerCase() : x)
}