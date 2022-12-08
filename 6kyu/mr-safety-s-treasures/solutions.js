function unlock(str){
    let key = [ "abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]
   return [...str.toLowerCase()].map(x => key.indexOf(key.find(a => a.includes(x))) + 2).join('')
}

console.log( unlock("Nokia") , "66542" );
console.log( unlock("Valut") , "82588" );
console.log( unlock("toilet"), "864538" );