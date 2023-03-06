function kaCokadekaMe(word){
    let temp = word
    word = 'ka' + word.replace(/[aeiou]{1,}/gi, a => `${a}ka`)
    return /[aeiou]/i.test(temp[temp.length - 1]) ? word.slice(0, word.length - 2) : word
}

console.log( 
    kaCokadekaMe("a"), "kaa" );
console.log( 
    kaCokadekaMe("z"), "kaz" );    
console.log( 
    kaCokadekaMe("ka"), "kaka" );     
console.log( 
    kaCokadekaMe("Abbaa"), "kaAkabbaa" );
console.log( 
    kaCokadekaMe("maintenance"), "kamaikantekanakance" );
console.log( 
    kaCokadekaMe("Woodie"), "kaWookadie" );
console.log( 
    kaCokadekaMe("Incomprehensibilities"), "kaIkancokamprekahekansikabikalikatiekas" );    
