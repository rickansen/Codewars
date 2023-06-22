function switcheroo(x){
    return [...x].map(x => x === 'a' ? 1 : x === 'b' ? 2 : x).map(x => x === 1 ? 'b' : x === 2 ? 'a' : x).join('')
}   

console.log(switcheroo('abc'), 'bac');
console.log(switcheroo('aaabcccbaaa'), 'bbbacccabbb'); 
console.log(switcheroo('ccccc'), 'ccccc');    