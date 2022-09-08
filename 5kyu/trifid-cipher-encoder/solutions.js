function trifidEncode(key, period, data) {
  let regex = new RegExp(/[a-z+]/i)
  key = [...key], data = [...data].filter(x => regex.test(x))
  data = data.map( (x,y) => [~~(key.indexOf(x) / 9)+1, (~~(key.indexOf(x) / 3) % 3) + 1, (key.indexOf(x) % 3) + 1 ]  )
  let length = ~~(data.length/period), arr = [], arr1 = [], arr2 = [], arr3= [], arr4 = []

  for (let i = 0; i <= length; i++) {
    arr.push(data.splice(0,period))
  }

  arr1.push( arr.map( (x,y) => x.map( (a,b) => a[0] ) ))
  arr2.push( arr.map( (x,y) => x.map( (a,b) => a[1] ) ))
  arr3.push( arr.map( (x,y) => x.map( (a,b) => a[2] ) ))

  let divide = arr1.map( (x,y) => x.map( (a,b) => a.concat(arr2[y][b]) ).map( (a,b) => a.concat(arr3[y][b]))).reduce((a,b) => a.concat(b)).reduce((a,b) => a.concat(b))
  let length1 = divide.length / 3

  for (let i = 0; i < length1; i++) {
    arr4.push(divide.splice(0,3))
  }
  return arr4.map(x => key[(((x[0] - 1) * 9) + ( ( (x[1] - 1) * 3) + x[2]) - 1)] ).join('')
} 
//   1 2 3      1 2 3      1 2 3    
// 1 E P S    1 M + Z    1 F G O    
// 2 D U C    2 L K X    2 R I J    
// 3 V W Y    3 N B T    3 H A Q    

// D E F E N D T H E E A S T W A L L O F T H E C A S T L E +
// 1 1 3 1 2 1 2 3 1 1 3 1 2 1 3 2 2 3 3 2 3 1 1 3 1 2 2 1 2
// 2 1 1 1 3 2 3 3 1 1 3 1 3 3 3 2 2 1 1 3 3 1 2 3 1 3 2 1 1
// 1 1 1 1 1 1 3 1 1 1 2 3 3 2 2 1 1 3 1 3 1 1 3 2 3 3 1 1 2

// D E F E N  D T H E E  A S T W A  L L O F T  H E C A S  T L E +
// 1 1 3 1 2  1 2 3 1 1  3 1 2 1 3  2 2 3 3 2  3 1 1 3 1  2 2 1 2
// 2 1 1 1 3  2 3 3 1 1  3 1 3 3 3  2 2 1 1 3  3 1 2 3 1  3 2 1 1 
// 1 1 1 1 1  1 3 1 1 1  2 3 3 2 2  1 1 3 1 3  1 1 3 2 3  3 1 1 2

// 113 122 111 311 111  123 112 331 113 111  312 133 133 323 322
// S   U   E   F   E    C   P   H   S   E    G   Y   Y   J   I   

// 223 322 211 311 313  311 313 123 111 323   221 232 113 112
// X   I   M   F   O    F   O   C   E   J     L   B   S   P


console.log(
  trifidEncode(
    'EPSDUCVWYM+ZLKXNBTFGORIJHAQ',
    5,
    'DEFENDTHEEASTWALLOFTHECASTLE+'
  ),
  'SUEFECPHSEGYYJIXIMFOFOCEJLBSP'
);

console.log(
  trifidEncode(
    'EPSDUCVWYM+ZLKXNBTFGORIJHAQ', 
    6, 
    'ABCDEFG'
  ),
  'RSAMXEG'
);
