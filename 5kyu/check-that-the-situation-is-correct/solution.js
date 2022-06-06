// global variables for the hoisted function
// let arr3 = []
// let random = ['X', '0', '_']
// let arr4 = []
// for (let i = 0; i<9; i++) {
//   arr3.push(random[Math.floor(Math.random() * 3)])
// }


function isItPossible(field) {
  field = field.split('')
  let arr =[]

  for (let i = 0; i < 3; i++) {
    arr.push(field.slice(i * 3, i*3 + 3))
  }

  let x = field.filter(x=> x == 'X').length 
  let o = field.filter(x=> x == '0').length

  if ((field.includes('X') && field.includes('0')) || field.every(x => x === '_') || x === 1) {
    console.table(arr)
    
    if (x - o === 1 || x - o === 0) {

      let checkHoriz = arr.map(x => x.every(a => a === 'X') ? 'X' : x.every(a => a === '0') ? '0' : false)
      let crossOrZeroHoriz = checkHoriz.every(x => x === false) ? '_' : checkHoriz.includes('X') ? 'X' : '0'
      let checkVert = arr.map((x,y) => x.map( (a,b,c ) =>  arr[b][y]) ).map(x => x.every(a => a === 'X') ? 'X' : x.every(a => a === '0') ? '0' : false)
      let crossOrZeroVert = checkVert.every(x => x === false) ? '_' : checkVert.includes('X') ? 'X' : '0'
      let checkDiagonal = [arr.map((x,y) => x[y]), arr.map((x,y) => x[2-y])].map(x => x.every(a => a === 'X') ? 'X': false)
      let crossOrZeroDiagonal = checkDiagonal.every(x => x === false) ? '_' : checkDiagonal.includes('X') ? 'X' : '0'

      let checkAll = [checkHoriz.includes('X') && checkHoriz.includes('0') ? '_' : checkHoriz.filter(x => x !== false).length === 0 ? '_' : checkHoriz.filter(x => x !== false),checkDiagonal.includes('X') && checkDiagonal.includes('0') ? '_' : checkDiagonal.filter(x => x !== false).length === 0 ? '_' : checkDiagonal.filter(x => x !== false),checkVert.includes('X') && checkVert.includes('0') ? '_' : checkVert.filter(x => x !== false).length === 0 ? '_' : checkVert.filter(x => x !== false)].map(x => Array.isArray(x) ? x[0] :'_' )

      let allCrossOrZero = checkAll.filter(x => x !== '_')

      if (checkHoriz.includes('X') && checkHoriz.includes('0')) {
        return false
      } else if (checkAll.includes('X') || checkAll.includes('0')) {
        return allCrossOrZero[0] === 'X' ? x > o : x === o 
      } else {
        return x >= o
      }

    } else {
      return false
    }


  } else {
    return false
  }



}

console.log(isItPossible('00_'+ 'X0_' +'0_X'))

// random tictactoe answer generator (hoisted function)
// function tictac () {

//   for (let i =0; i <3; i++) {
//     arr4.push(arr3.slice(i * 3, i * 3 + 3))
//   }
  
//   let split = arr4.map(x => x.join('')).join('')
//   return split
// }

// console.log(tictac())
