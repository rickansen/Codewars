const mirror = obj => {
    let result = {};
  
    for (let key in obj) {
      result[key] = key.split('').reverse().join('');
    }
    
    return result;
};