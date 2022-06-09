let hypertensive = function(patients) {
  
    return patients.map(function (x) {
  
      return x.length > 1
  
      ? x.map(a => a.split('/').map(b=> +b)[0] >= 180 && a.split('/').map(b=> +b)[1] >= 110).some(x => x === true)
          
      || (x.map(a => a.split('/').map(b=> +b)[0]).reduce((acc,c) => acc + c) / x.length) >= 140 
        
      || (x.map(a => a.split('/').map(b=> +b)[1]).reduce((acc,c) => acc + c)) / x.length >= 90
        
      : x.map(a => a.split('/').map(num => +num)[0] >= 180 && a.split('/').map(num => +num)[1] >= 110)[0]
        
    }).filter(x => x === true).length
    
}