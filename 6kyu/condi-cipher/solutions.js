function encode  (message, key, initShift)  {
    let alphabet = Array(26).fill(1).map( (x,y) => String.fromCharCode(y+97))
    key = Array(...new Set([...key]))
    key = key.concat(alphabet.filter(x => !key.includes(x)))
    message = [...message]
    for (let i = 0; i < message.length; i++) {
        let x = message[i]
        if (key.includes(x)) {
            message[i] = [x, key.indexOf(x), (key.indexOf(x) + (i === 0 ? initShift : message[i-1][1] + 1)) % 26 ]
            
        } else {
            let last = message.slice(0,i).reverse().find(a => a.length === 3)
            message[i] = [message[i], (last ? last[1] : x)]
        }
    }
  
    return message.map(x => x[2] === 26 ? 0 : x).map(x => x.length === 2 ? x[0] : x[2]).map(x => typeof x === 'number' ? key[x] : x).join('')
}

// console.log(
//     encode("on","cryptogam",10), "jx" );
// console.log(
//     encode("cryptogram","cryptogam",0), "cytgmdfmbk" );
// console.log(
//     encode("on the first day i got lost.","cryptogam",10), "jx wnz xrkvz jnd l ufd vwcz." );
// console.log(
//     encode("i will never eat any grapes again","superkey",4), "n ggka cvssb bfe esz omgdyr bqqva" );
// console.log(
//     encode("........","cryptogam",10), "........" );



function decode (message, key, initShift)  {
    let alphabet = Array(26).fill(1).map( (x,y) => String.fromCharCode(y+97))
    key = Array(...new Set([...key]))
    key = key.concat(alphabet.filter(x => !key.includes(x)))
    message = [...message]
    for (let i = 0; i < message.length; i++) {
        let x = message[i]
        if (key.includes(x)) {
            let next = (key.indexOf(x) - (i === 0 ? initShift : message[i-1][2] + 1))
            message[i] = [x, key.indexOf(x), next < 0 ? 26 + next : next]
            
        } else {
            let last = message.slice(0,i).reverse().find(a => a.length === 3)
            message[i] = [message[i], (last ? last[2] : x), (last ? last[2] : x), (last ? last[2] : x)]
        }
    }
  
    return message.map(x => x.length === 4 ? x[0] : x[2]).map(x => x < 0 ? 26 + x : x).map(x => x === 26 ? 0 : x).map(x => typeof x === 'number' ? key[x] : x).join('')
   
}
///1  2  3  4  5  6  7  8  9  10 11 12 13
// c  r  y  p  t  o  g  a  m  b  d  e  f 
// 14 15 16 17 18 19 20 21 22 23 24 25 26
// h  i  j  k  l  n  q  s  u  v  w  x  z

// console.log(decode(
//     "jx","cryptogam",10), "on" );
// console.log(decode(
//     "...,","cryptogam",10), "...," );
// console.log(decode(
//     "abc","keykeykeykey",10), "sit" );
// console.log(decode(
//     "jx wnz xrkvz jnd l ufd vwcz.","cryptogam",10), "on the first day i got lost." );
// console.log(decode(
//     "n ggka cvssb bfe esz omgdyr bqqva","superkey",30), "i will never eat any grapes again" );
// console.log(decode(
//     "qvf cmnxmdkjfca.p,ab mf,byokf vjhwpcyb","nqhbfgmi",28), "zva nguhbmmgydx.s,ok se,rmafz vpedgbua");
console.log(decode(
    ",.tgsblurjd,","ozppvl",23), ",.xhcxampgu" );
