function getDrinkByProfession(param = 'Beer'){
    param = param.toLowerCase()
    if (param === "jabroni") {
        return "Patron Tequila"
    } else  if (param === "school counselor") {
        return "Anything with Alcohol"
    } else  if (param === "programmer") {
        return "Hipster Craft Beer"
    } else  if (param === "bike gang member") {
        return "Moonshine"
    } else  if (param === "politician") {
        return "Your tax dollars"
    } else  if (param === "rapper") {
        return "Cristal"
    } else {
        return "Beer"
    } 
}

console.log(
    getDrinkByProfession("jabrOni"), "Patron Tequila");
console.log(
    getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol");
console.log(
    getDrinkByProfession("prOgramMer"), "Hipster Craft Beer");
console.log(
    getDrinkByProfession("bike ganG member"), "Moonshine");
console.log(
    getDrinkByProfession("poLiTiCian"), "Your tax dollars");
console.log(
    getDrinkByProfession("rapper"), "Cristal");
console.log(
    getDrinkByProfession("pundit"), "Beer");
console.log(
    getDrinkByProfession("Pug"), "Beer");