function domainName(url){

    let index1 = url.indexOf('/')
    let index2 = url.split('').map((x,y) => x === '.' ? y : x).filter(x => typeof x === 'number')
   
    if ( (url.includes('http') && url.includes('www')) || url.includes('www')) {
      return url.slice(index2[0] + 1, index2[1])
  
    } else if (url.includes('http')) {
      return url.slice(index1 + 2, index2[0])
  
    } else {
      return url.slice(0, index2[0])
    }
  
}