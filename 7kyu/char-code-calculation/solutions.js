function calc(x){
    const total1 = x.split('').map(x => String(x.charCodeAt())).join('').split('').reduce((a,b) => +a + +b)
    const total2 = x.split('').map(x => String(x.charCodeAt()).split('').map(a => a == 7 ? 1 : a ).join('') ).join('').split('').reduce((a,b) => +a + +b)
  
    return total1 - total2
}