function smaller(nums) {
    let arr = []
    let arr1 = []
    for (let i = 0; i < nums.length; i++) {
      for (let x = 0; x < nums.length; x++) {
        arr.push(nums[i] > nums[x + i + 1])
      }
    }
  
    for (let i = 0; i <nums.length; i++) {
      arr1.push(arr.slice(i*nums.length, i * nums.length + nums.length))
  
    } 
  
    return arr1.map(x => x.filter(a => a === true).length)
  }