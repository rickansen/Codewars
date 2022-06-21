function add(a, b) {

    let same = []
    a = a.split('')
    b = b.split('')
    const diff = b.length - a.length
    const diff2 = a.length - b.length


    if (a.length > b.length) {
        
        for (let i = 0; i < diff2; i++) {
            b.unshift('0')
        }

        let add = b.map((x,y) => Number(x) + Number(a[y])).map(x => String(x).length > 1 ? String(x).split('')[1] : x).reverse()
        

        while (add.some(x => typeof x === 'string')) {
            add = add.map(function (x,y,z) {
                if (y === 0) {
                    return Number(x)
                } else {
                    if (typeof z[y -1] === 'string') {
                        return Number(x) + 1
                    } else {
                        return Number(x)
                    }
                }
            }).map(x => String(x).length > 1 ? String(x).split('')[1] : x)
        }

        let fin =  add.reverse().map(x => String(x))
        return fin.every(x => x === '0') ? '1'.concat(fin.join('')) : fin.join('')

    } else if (a.length < b.length) {
        
        for (let i = 0; i < diff; i++) {
            a.unshift('0')
        }

        let add = a.map((x,y) => Number(x) + Number(b[y])).map(x => String(x).length > 1 ? String(x).split('')[1] : x).reverse()
        

        while (add.some(x => typeof x === 'string')) {
            add = add.map(function (x,y,z) {
                if (y === 0) {
                    return Number(x)
                } else {
                    if (typeof z[y -1] === 'string') {
                        return Number(x) + 1
                    } else {
                        return Number(x)
                    }
                }
            }).map(x => String(x).length > 1 ? String(x).split('')[1] : x)
        }

        let fin =  add.reverse().map(x => String(x))
           return fin.every(x => x === '0') ? '1'.concat(fin.join('')) : fin.join('')


    } else {
        if (a.length < 10 || b.length < 10) {
            return String(+a.join('') + +b.join(''))
        } else if (a.length < 7 || b.length < 7){
            let add = a.map((x,y) => Number(x) + Number(b[y])).map(x => String(x).length > 1 ? String(x).split('')[1] : x).reverse()
        

            while (add.some(x => typeof x === 'string')) {
                add = add.map(function (x,y,z) {
                    if (y === 0) {
                        return Number(x)
                    } else {
                        if (typeof z[y -1] === 'string') {
                            return Number(x) + 1
                        } else {
                            return Number(x)
                        }
                    }
                }).map(x => String(x).length > 1 ? String(x).split('')[1] : x)
            }

           let fin =  add.reverse().map(x => String(x))
           return fin.every(x => x === '0') ? '1'.concat(fin.join('')) : fin.join('')

        } else {
            let add = a.map((x,y) => Number(x) + Number(b[y])).map(x => String(x).length > 1 ? String(x).split('')[1] : x).reverse()
        

            while (add.some(x => typeof x === 'string')) {
                add = add.map(function (x,y,z) {
                    if (y === 0) {
                        return Number(x)
                    } else {
                        if (typeof z[y -1] === 'string') {
                            return Number(x) + 1
                        } else {
                            return Number(x)
                        }
                    }
                }).map(x => String(x).length > 1 ? String(x).split('')[1] : x)
            }

            return  '1'.concat(add.reverse().map(x => String(x)).join('')) 
        }
    }

  

}