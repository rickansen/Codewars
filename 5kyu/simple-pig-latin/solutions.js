function pigIt(str){
    let regex = new RegExp(/[a-z]/i)
    return str.split(' ').map(x =>  regex.test(x) ? x.substring(1).concat(x[0]) + 'ay' : x).join(' ')

}


