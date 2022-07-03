deadAntCount = function(ants) {
    let regex = new RegExp(/[a-z]/)
  
    if (!ants) return 0
    const removeAlive = ants.split('ant').filter(x => regex.test(x))
    let a = 0, n = 0, t = 0
    
    removeAlive.join('').split('').filter(x => regex.test(x)).map(x => x === 'a' ? a += 1 : x === 'n' ? n += 1 : t += 1)
    
    return Math.max(...[a,n,t])

}