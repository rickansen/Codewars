
function findTheNumberPlate(customerID) {
    let div = customerID / 999
    let num = (customerID % 999) + 1
    let str =  `${(String(0)).repeat(3 - String(num).length)}${num}` 

    return [ ~~(div) % 26, ~~(~~(div) / 26) % 26, ~~(~~(~~(div) / 26) / 26) % 26 ].map(x => String.fromCharCode(x + 97)).join('') + str
}
