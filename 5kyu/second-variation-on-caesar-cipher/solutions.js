let regex1 = /[a-z]/
let regex2 = /[A-Z]/

function encodeStr(s, shift) {
  console.log(s)


  let cipher =  s.split('').map(function (x,y) {
    return regex1.test(x) ? x.charCodeAt() + shift - 96 <= 26 ? String.fromCharCode(x.charCodeAt() + 1 ): String.fromCharCode(((x.charCodeAt() + 1 - 96) % 26) + 96) : regex2.test(x) ? x.charCodeAt() + shift - 64 <= 26 ? String.fromCharCode(x.charCodeAt() + shift) : String.fromCharCode(((x.charCodeAt() + 1 - 64) % 26) + 64) : x
  })

  let start = s[0].toLowerCase()
  start = `${start}${String.fromCharCode(((start.charCodeAt() - 96 + 1) % 26)+96)}${String.fromCharCode(((start.charCodeAt() - 96 + 1) % 26)+96).toUpperCase()}`.split('')

  start = start.map((x,y) => y === 2 ? regex2.test(s[0]) ? start[2] : start[2].toLowerCase() : x)
  
  let final = start.concat(cipher.slice(1))

  let arr = final.length % 5 === 0 ? Array(5).fill(final.length/ 5) : Array(4).fill(Math.ceil(final.length / 5))
 
  if (arr.reduce((a,b) => a + b) != final.length) arr.push(final.length - (arr[0] * 4))

  return arr.map((x,y) => final.splice(0, x).join(''))

}

function decode(arr) {
  console.log(arr)
  return arr.join('').split('').map(x => regex1.test(x) ? String.fromCharCode(((x.charCodeAt() - 96 - 1) % 26) + 96) : regex2.test(x) ? String.fromCharCode((x.charCodeAt() - 64 - 1) + 64): x).slice(2).join('')
}

console.log(encodeStr('abcdefghjuty12', 1))