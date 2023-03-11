function keywordCipher(string, keyword){
    string = string.toLowerCase()
    let temp = [...keyword]
    keyword = [...new Set([...keyword])]
    let char = [...'abcdefghijklmnopqrstuvwxyz ']
    let newKey = keyword.concat(char.filter(x => !keyword.includes(x))).join('')
    return [...string].map( (x,y) => newKey[char.indexOf(x)] ).join('')
}

console.log(
    keywordCipher("Welcome home","secret"), "wticljt dljt", "Expect 'Welcome home' to return 'wlfimhl kmhl'");
console.log(
    keywordCipher("hello","wednesday"), "bshhk");
console.log(
    keywordCipher("HELLO","wednesday"), "bshhk");
console.log(
    keywordCipher("HeLlO","wednesday"), "bshhk");
console.log(
    keywordCipher("WELCOME HOME", "gridlocked"), "wlfimhl kmhl", "Expect 'WELCOME HOME' to return 'wlfimhl kmhl'");
console.log(
    keywordCipher("alpha bravo charlie", "delta"), "djofd eqdvn lfdqjga", "Expect 'alpha bravo chalie' to return 'djofd eqdvn lfdqjga'");
console.log(
    keywordCipher("Home Base", "seven"), "dlja esqa", "Expect 'Home Base' to return 'dlja esqa'");
console.log(
    keywordCipher("basecamp", "covert"), "ocprvcil", "Expect 'basecamp' to return 'ocprvcil");
console.log(
    keywordCipher("one two three", "rails"), "mks twm tdpss", "Expect 'one two three' to return 'mks twm tdpss'");
console.log(
    keywordCipher("Test", "unbuntu"), "raqr", "Expect 'Test' to return 'raqr'");
