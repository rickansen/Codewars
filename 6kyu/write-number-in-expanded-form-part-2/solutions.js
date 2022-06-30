function expandedForm(num) {
    let arr = String(num).split('.')
    let integerArr =  arr[0].split('').map((x,y,z) => String(+x * (10 ** (z.length - 1 - y))))
    let decimalArr = arr[1].split('').map((x,y,z) => `${x}/${10 ** (y + 1)}`)
    return integerArr.concat(decimalArr).filter(x => !x.startsWith('0')).join(' + ')
    
}