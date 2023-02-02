const mergeArrays = (arr1, arr2) => [...new Set(arr1.concat(arr2))].sort((a,b) => a - b)
  