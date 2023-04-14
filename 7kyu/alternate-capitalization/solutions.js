const capitalize = s => [[...s].map((x,y) => y % 2 === 0 ? x.toUpperCase() : x.toLowerCase()).join(""), [...s].map((x,y) => y % 2 === 1 ? x.toUpperCase() : x.toLowerCase()).join("")]

console.log(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
console.log(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
console.log(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
console.log(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
