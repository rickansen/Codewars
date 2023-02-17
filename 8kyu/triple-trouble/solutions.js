const tripleTrouble = (one, two, three) => [...one].map( (x,y) => `${x}${two[y]}${three[y]}`).join('') 

console.log(tripleTrouble("aaa","bbb","ccc"), "abcabcabc");
console.log(tripleTrouble("aaaaaa","bbbbbb","cccccc"), "abcabcabcabcabcabc");
console.log(tripleTrouble("burn", "reds", "roll"), "brrueordlnsl");
console.log(tripleTrouble("Sea","urn","pms"), "Supermans"); 
console.log(tripleTrouble("LLh","euo","xtr"), "LexLuthor");