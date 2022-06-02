function findOutlier(integers){
    let odd = integers.filter(x => x % 2 !== 0), even = integers.filter(x => x % 2 === 0)
    return even.length === 1 ? even[0] : odd[0]
  }
  