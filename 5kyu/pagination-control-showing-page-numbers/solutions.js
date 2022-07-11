const getPages = (length, currentPage, size) => {
    if (length === 1) return ''
    let arr = []
    let page = size * 2 + 3 < length  ? size * 2 + 3 : length
    for (let i = 0; i < page; i++) {
      if (i === 0) {
        arr.push(1)
      } else if (i === page - 1) {
        arr.push(length)
      } else {
        let counter = currentPage - size
        if (size * 2 >= length) {
          arr.push(i + 1)
        } else if (currentPage === length) {
          counter = (length - (size * 2)) - 1
          arr.push(size % 2 === 0 ? counter + i - 1 : counter + i + 1)
        } else if (currentPage + size > length) {
          counter = length - (size * 2)
          arr.push(counter + i)
        } else if (size + 2 > currentPage) {
          counter = 1
          arr.push(counter + i)
        } else {
          arr.push(counter - 1 + i)
        }
        
      }
    }
    return arr
};