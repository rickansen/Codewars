function aliasGen(a,b){
    if ( /\d/.test(a[0]) || /\d/.test(b[0]) ) return "Your name must start with a letter from A - Z."
    return `${ firstName[a[0].toUpperCase()] } ${ surname[b[0].toUpperCase()] }` 
}

console.log(aliasGen("Mike", "Millington"), "Malware Mike");
console.log(aliasGen("Fahima", "Tash"), "Function T-Rex");
console.log(aliasGen("Daisy", "Petrovic"), "Data Payload");
console.log(aliasGen("7393424", "Anumbha"), "Your name must start with a letter from A - Z.");
console.log(aliasGen("Anuddanumbha", "23200"), "Your name must start with a letter from A - Z.");
