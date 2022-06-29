function redistributeWealth(wealth) {

    let mean =  wealth.reduce((a,b) => a + b) / wealth.length
    
    for (let i = 0; i < wealth.length; i++){
      wealth[i]=mean
    }
    
}