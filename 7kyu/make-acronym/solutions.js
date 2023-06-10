const toAcronym = inp => inp.split(' ').map(x => x[0]).join('').toUpperCase()

console.log(toAcronym("Code Wars"), "CW")
console.log(toAcronym("Water Closet"), "WC")
console.log(toAcronym("Portable Network Graphics"), "PNG")
console.log(toAcronym("PHP: Hypertext Preprocessor"), "PHP")
console.log(toAcronym("hyper text markup language"), "HTML")