function balanceStatements(list){
    let split = list.split(',').map(x => x.trim()).map((x,y) => x.split(' '))
    let check = split.map((x,y) => x.map((a,b) => b === 0 && !a.includes(' ') ? true : b === 1 && !a.includes('.') ? true : b === 2 && a.includes('.') ? true : b === 3 && a === 'B' || a === 'S').every(a => a === true) ? [x[1] * x[2], x[3] === 'S' || x[3] === 'B' ? x[3] : x] : [y, x])

    if (list) {
        let buy =  check.filter(x => x.includes('B')).length !== 0? check.filter(x => x.includes('B')).map(a => a[0]).reduce((a,b) => a+b) : 0
        let sell =  check.filter(x => x.includes('S')).length !== 0? check.filter(x => x.includes('S')).map(a => a[0]).reduce((a,b) => a+b) : 0
        let bad = check.filter(x => !x.includes('B') && !x.includes('S'))
        let arr = []

        if (bad.length === 1 ) {
           return `Buy: ${Math.round(buy)} Sell: ${Math.round(sell)}; Badly formed ${bad.length}: ${bad[0][1].join(' ')} ;`
        
        } else if (bad.length > 1) {
            for (let i = 0; i < bad.length; i++) {
                arr.push(bad[i][1].join(' '))
            }
            arr =  arr.join(' ;')

            return `Buy: ${Math.round(buy)} Sell: ${Math.round(sell)}; Badly formed ${bad.length}: ${arr} ;`
        } else {
            return `Buy: ${Math.round(buy)} Sell: ${Math.round(sell)}`
        }
        
    } else {
        return "Buy: 0 Sell: 0"
    }

}