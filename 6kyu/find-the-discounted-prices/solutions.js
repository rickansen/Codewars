function findDiscounted(prices){
    prices = prices.split(' ')
  
    let removed = prices.map( (x,y,z) => z.indexOf( String(+x / 0.75) ) !== -1 ? z.splice(z.indexOf( String(+x / 0.75) ), 1) : '' ).filter(x => x).join(' ').split(' ')

    return prices.join(' ')
}